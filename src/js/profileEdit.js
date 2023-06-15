fetch('userData.json')
  .then(response => response.json())
  .then(data => {
    const nameElement = document.getElementById('name');
    const surnameElement = document.getElementById('surname');
	const professionElement = document.getElementById('profession');
	const descriptionElement = document.getElementById('description');
	const geolocationElement = document.getElementById('geolocation');
	const numberElement = document.getElementById('number');
	const mailElement = document.getElementById('mail');
	const telegramElement = document.getElementById('telegram');
    // Другие элементы профиля

    // Заполните элементы профиля данными из JSON
    nameElement.textContent = data.name;
    surnameElement.textContent = data.surname;
	professionElement.textContent = data.profession;
	descriptionElement.textContent = data.description;
	geolocationElement.textContent = data.geolocation;
	numberElement.textContent = data.number;
	mailElement.textContent = data.mail;
	telegramElement.textContent = data.telegram;

    // Другие элементы профиля
  });