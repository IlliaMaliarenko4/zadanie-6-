fetch('dane.json')
    .then(response => response.json())
    .then(data => {
        const listaUmiejetnosci = document.getElementById('lista-umiejetnosci');
        data.umiejetnosci.forEach(umiejetnosc => {
            const li = document.createElement('li');
            li.textContent = umiejetnosc;
            listaUmiejetnosci.appendChild(li);
        });

        const listaProjektow = document.getElementById('lista-projektow');
        data.projekty.forEach(projekt => {
            const li = document.createElement('li');
            const strong = document.createElement('strong');
            strong.textContent = projekt.nazwa;
            li.appendChild(strong);
            li.appendChild(document.createTextNode(' - ' + projekt.opis));
            listaProjektow.appendChild(li);
        });
    })
    .catch(error => console.error(error));
