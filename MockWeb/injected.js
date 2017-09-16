(function main() {
	// code goes here

	const INTENSITY = 0.4; // double from 0.0 to 1.0 describing how often to up_char
	const SELECTOR = 'a,abbr,address,article,aside,b,blockquote,button,caption,cite,code,div,h1,h2,h3,h4,h5,header,i,ol,ul,li,p,sub,span,strong';

	function mock(str) {
		if (typeof str === 'string') {
			for (let i = 0; i < str.length; i++) {
				if (Math.random() < INTENSITY) {
					str = up_char(str, i);
				}
			}
		}
		return str;
	}
	function up_char(str, index) {
		return str.substring(0, index) + str.charAt(index).toUpperCase() + str.substring(index + 1, str.length);
	}

    let selection = document.querySelectorAll(SELECTOR);
    for (let i in selection) {
        if (selection[i].children && selection[i].children.length === 0) {
            selection[i].textContent = mock(selection[i].textContent);
        } else {
            for (let j in selection[i].childNodes) {
                if(selection[i].childNodes[j].nodeName === '#text') {
                    selection[i].childNodes[j].data = mock(selection[i].childNodes[j].data);
                }
            }
        }
    }

})();
