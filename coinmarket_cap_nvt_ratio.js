/* Run it on https://coinmarketcap.com/ */

MARKET_CAP_COLUMN = 7;
VOLUME_COLUMN = 8;
TD_BODY_POSITION = 2;

function print_nvt_ratio() {
	output_list = [];

	for(i=0; i < $("table").children[TD_BODY_POSITION].children.length; i++) {
		try {
			var row = $("table").children[TD_BODY_POSITION].children[i];
			var market_cap = row.children[MARKET_CAP_COLUMN].textContent.split("$")[2].replaceAll(",", "");
			var volume = row.children[VOLUME_COLUMN].children[0].children[0].textContent.replace("$", "").replaceAll(",", "");
			var symbol = row.children[VOLUME_COLUMN].textContent.split(" ")[1];
			var nvt_ratio = market_cap/volume;

			output_list.push({"symbol": symbol, "nvtRatio": nvt_ratio});
		} catch (error) {
		  console.error(error);
		}
	}

	output_list.sort((a, b) => a.nvtRatio - b.nvtRatio);

	for(i=0; i < output_list.length; i++) {
		console.log(output_list[i]);
	}
}

print_nvt_ratio();
