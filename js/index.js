(async function () {

	console.log("[TRACE] <index.js> ### START ###");

	import("../pkg/index.js")
	.then(function (m) {
		console.log("[TRACE] WASM module:", m);
		console.log("[TRACE] Rust uppercase() returned [", m.wasm_to_uppercase("aaaaaAAAaAaAAaA"), "]");
	})
	.catch(console.error);

	console.log("[TRACE] <index.js> --- END ---");
})()
