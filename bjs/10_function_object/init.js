function startGeneration()
{
    const initPerson = personGenerator.getPerson();
    document.querySelector('#genderOutput').innerText = initPerson.gender;
    document.querySelector('#firstNameOutput').innerText = initPerson.firstName;
    document.querySelector('#surnameOutput').innerText = initPerson.surName;
    document.querySelector('#patronymicOutput').innerText = initPerson.patronymic;
    document.querySelector('#dateBirthOutput').innerText = initPerson.dateBirth;
    document.querySelector('#professionOutput').innerText = initPerson.profession;
};


window.onload = startGeneration;

document.querySelector('#generation').addEventListener('click', startGeneration);

document.querySelector('#clear').addEventListener('click', function () {
    let outputList = document.querySelectorAll('.output');
    for (let i = 0, len = outputList.length; i < len; i++) {
        outputList[i].innerText = '---';
    }
});