let meta = #{
    name: "rh-field-round",
    description: "RH field compile: gap hunt, Llama snapshot, account desk, collision audit",
    when_to_use: "After an X scout dump, or to rescore accounts / find map gaps on research/ecosystem-baseline",
    phases: [
        #{ title: "Desks", detail: "four specialists in parallel" },
        #{ title: "Compile", detail: "one hunt list for the next scout" },
    ],
};

let desk_schema = #{
    "type": "object",
    "required": ["items"],
    "properties": #{
        "items": #{
            "type": "array",
            "maxItems": 16,
            "items": #{
                "type": "object",
                "required": ["title", "detail"],
                "properties": #{
                    "title": #{ "type": "string" },
                    "detail": #{ "type": "string" },
                },
            },
        },
    },
};

let hunt = if args == () { "open gaps" } else { args.hunt };
if hunt == () { hunt = "open gaps"; }

phase("Desks");

let p_gap = "";
p_gap += "You are the RH field gap hunter for Proofline. Work only under ";
p_gap += "/Users/harsharnsingh/proofline-research/research/inbox/. ";
p_gap += "Use read_file and grep. Do not write files. Do not touch content/ or site/. ";
p_gap += "Read 2026-08-31-ecosystem-map.yaml, 2026-08-31-ops.md, and the highest-numbered x-fill-*.md. ";
p_gap += "Hunt focus: " + hunt + ". ";
p_gap += "Return at most 16 items {title, detail} of names/handles/CAs that are still missing, ";
p_gap += "still unofficial (SCOPL, Odyssey pad, SwapHood), or still unconfirmed after 09:30 ET (Arrow CDP). ";
p_gap += "Empty items is valid only after you have opened those files. Never invent handles.";

let p_llama = "";
p_llama += "You are the RH chain-numbers desk. Use web_search and/or curl to api.llama.fi ";
p_llama += "for Robinhood Chain DEX 24h, Pons V2, Uniswap V4/V3, up v3, Fables. ";
p_llama += "Return items {title, detail} with the number AND the URL. No number without a source. ";
p_llama += "Max 16 items. Do not write files. If a fetch fails, say so in detail — do not guess.";

let p_desk = "";
p_desk += "You are the RH account desk. Read ";
p_desk += "/Users/harsharnsingh/proofline-research/research/inbox/account-desk.yaml ";
p_desk += "and 2026-08-31-ops.md section 4, and the latest x-fill. Use read_file and grep. ";
p_desk += "Return items {title, detail} of (a) handles that should change listen/follow, ";
p_desk += "(b) new handles from the latest fill missing from the desk, ";
p_desk += "(c) trending-eligible alphas. Do not blacklist people. skip-ingest only for ";
p_desk += "impersonators, drainers, wrong-chain. Do not write files. Max 16 items.";

let p_col = "";
p_col += "You are the RH collision auditor. Read ecosystem-map.yaml and 2026-08-31-ops.md section 6. ";
p_col += "Use grep/read_file. For each pair Hookr/HookOS, Arrow/Arrows, Delta/MaxFi/STORMM, ";
p_col += "Wire/Bankr/VEX, Safehood protocol vs $SAFEHOOD, CETS BSC vs RH, ";
p_col += "return items {title, detail} only if the map still merges them or a fill treated a ";
p_col += "drainer CA as official. Fail closed. Empty items is valid after you have checked. ";
p_col += "Do not write files.";

let jobs = [];
jobs.push(#{ prompt: p_gap, label: "gap", capability_mode: "read-only", output_schema: desk_schema });
jobs.push(#{ prompt: p_llama, label: "llama", capability_mode: "execute", output_schema: desk_schema });
jobs.push(#{ prompt: p_desk, label: "desk", capability_mode: "read-only", output_schema: desk_schema });
jobs.push(#{ prompt: p_col, label: "collision", capability_mode: "read-only", output_schema: desk_schema });

let results = parallel(jobs);

let merged = [];
let labels = ["gap", "llama", "desk", "collision"];
let i = 0;
for r in results {
    if r != () && r.success && r.output.items != () {
        for it in r.output.items {
            merged.push(#{ desk: labels[i], title: it.title, detail: it.detail });
        }
    } else {
        log("desk " + labels[i] + " returned nothing usable — treat as unverified, not empty-success");
    }
    i += 1;
}

phase("Compile");

let encoded = json_encode(merged);
let p_comp = "";
p_comp += "You are the RH field compiler. Read-only. Do not write files. ";
p_comp += "Given these specialist items (JSON): " + encoded + " ";
p_comp += "Return at most 16 items {title, detail} that are the NEXT scout queries ";
p_comp += "(X Latest searches) and any map patches a human/orchestrator should apply. ";
p_comp += "Drop duplicates. Drop anything without a handle, CA, or concrete gap. ";
p_comp += "Never recommend writing content/ or pushing site.";

let comp = agent(p_comp, #{ label: "compiler", capability_mode: "read-only", output_schema: desk_schema });

let hunt_items = [];
if comp != () && comp.success && comp.output.items != () {
    hunt_items = comp.output.items;
}

let report = "# rh-field-round\n\n";
report += "hunt arg: " + hunt + "\n";
report += "specialist items: " + merged.len().to_string() + "\n";
report += "next scout items: " + hunt_items.len().to_string() + "\n\n";
for h in hunt_items {
    report += "- " + h.title + ": " + h.detail + "\n";
}
let path = write_scratch_file("hunt.md", report);
complete(#{ path: path, specialist_count: merged.len(), next: hunt_items });
