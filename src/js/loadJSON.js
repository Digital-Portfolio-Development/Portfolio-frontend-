function loadJSON(callback) {
	const xobj = new XMLHttpRequest();
	xobj.overrideMimeType("application/json");
	xobj.open('GET', 'widgetsData.json', true);
	xobj.onreadystatechange = function () {
	  if (xobj.readyState === 4 && xobj.status === 200) {
		callback(xobj.responseText);
	  }
	};
	xobj.send(null);
  }
  
  function createWidget(title, description, link) {
	const widgetContainer = document.getElementById('placeholderContainer');
  
	// Создание элементов виджета
	const widget = document.createElement('div');
	const widgetTitle = document.createElement('h2');
	const widgetDescription = document.createElement('p');
	widgetDescription.classList.add('placeholder-description');
  	widgetDescription.innerText = description;
	const widgetLink = document.createElement('a');

  	widgetDescription.classList.add('widget-placeholder-description');
  	widgetDescription.innerText = description;
  
	// Заполнение содержимого виджета
	widgetTitle.innerText = title;
	widgetDescription.innerText = description;
	widgetLink.setAttribute('href', link);
	widgetLink.innerText = link;

	widget.classList.add('widget-placeholder');
  
	// Добавление элементов виджета в контейнер
	widget.appendChild(widgetTitle);
	widget.appendChild(widgetDescription);
	widget.appendChild(widgetLink);
	widgetContainer.appendChild(widget);
  }
  
  function displayWidgets(data) {
	const widgetData = JSON.parse(data);
  
	// Создание виджетов на основе данных из JSON
	widgetData.forEach((widget) => {
	  createWidget(widget.title, widget.description, widget.link);
	});
  }
  
  // Загрузка JSON файла и отображение виджетов
  loadJSON(function (response) {
	displayWidgets(response);
  });