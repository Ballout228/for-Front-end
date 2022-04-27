
function BeforeDOMContentLoaded(first) {
	document.addEventListener('readystatechange', () => {
		if (document.readyState === 'interactive') {
			first();
		};
	});
};
function AfterDOMContentLoaded(second) {
	document.addEventListener('readystatechange', () => {
		if (document.readyState !== 'interactive') {
			second();
		};
	});
};
const BeGin = () => {
	alert('До события');
};
const TheEnd = () => {
	alert('После события');
};
AfterDOMContentLoaded(TheEnd);
BeforeDOMContentLoaded(BeGin);
document.addEventListener('DOMContentLoaded', () => {
	alert('Загрузился ДОМ');
});

window.onload = function(){
	alert("Все события завершены");
};

    
 




