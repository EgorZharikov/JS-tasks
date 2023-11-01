const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Валерий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Мария",
            "id_2": "Анастасия",
            "id_3": "Ольга",
            "id_4": "Ирина",
            "id_5": "Виктория",
            "id_6": "Наталья",
            "id_7": "Марина",
            "id_8": "Дарья",
            "id_9": "Ксения",
            "id_10": "Елена"
        }
    }`,
    patronymicJson: `{
        "count": 10,
        "list": {     
            "id_1": "Валерьев",
            "id_2": "Генадьев",
            "id_3": "Михайлов",
            "id_4": "Викторов",
            "id_5": "Сергеев",
            "id_6": "Егоров",
            "id_7": "Николаев",
            "id_8": "Петров",
            "id_9": "Юрьев",
            "id_10": "Алексадров"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": {"name": "Января", "days": 31},
            "id_2": {"name": "Февраля", "days": 28},
            "id_3": {"name": "Марта", "days": 31},
            "id_4": {"name": "Апреля", "days": 30},
            "id_5": {"name": "Мая", "days": 31},
            "id_6": {"name": "Июня", "days": 30},
            "id_7": {"name": "Июля", "days": 31},
            "id_8": {"name": "Авгута", "days": 31},
            "id_9": {"name": "Сентябя", "days": 30},
            "id_10": {"name": "Октября", "days": 31},
            "id_11": {"name": "Ноября", "days": 30},
            "id_12": {"name": "Декабря", "days": 31}
        }
    }`,  
     professionJson: `{
        "count": 20,
        "list": {     
            "id_1": {"name": "Слесарь", "gender": "M"},
            "id_2": {"name": "Грузчик", "gender": "M"},
            "id_3": {"name": "Военнослужащий", "gender": "M"},
            "id_4": {"name": "Шахтер", "gender": "M"},
            "id_5": {"name": "Пожарный", "gender": "M"},
            "id_6": {"name": "Сварщик", "gender": "M"},
            "id_7": {"name": "IT- специалист", "gender": "U"},
            "id_8": {"name": "Маркетолог", "gender": "U"},
            "id_9": {"name": "Врач", "gender": "U"},
            "id_10": {"name": "Спортивный тренер", "gender": "U"},
            "id_11": {"name": "Банковский работник", "gender": "U"},
            "id_12": {"name": "Юрист", "gender": "U"},
            "id_13": {"name": "Повар", "gender": "U"},
            "id_14": {"name": "Педагог", "gender": "U"},
            "id_15": {"name": "Менеджер", "gender": "U"},
            "id_16": {"name": "Торговый представитель", "gender": "U"},
            "id_17": {"name": "Бухгалтер", "gender": "U"},
            "id_18": {"name": "Финансовый аналитик", "gender": "U"},
            "id_19": {"name": "Специалист по продажам", "gender": "U"},
            "id_20": {"name": "Переводчик", "gender": "U"}
        }
    }`,
     
    
    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',

    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; 
        return obj.list[prop];
    },

    randomFirstName: function() {
        if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.firstNameFemaleJson);
        } else {
            return this.randomValue(this.firstNameMaleJson);
        }
    },
    
     randomSurName: function() {
         if (this.person.gender === this.GENDER_FEMALE) {
            return this.randomValue(this.surnameJson) + 'а';
         } else {
             return this.randomValue(this.surnameJson);
         }
            
    },

     randomGender: function() {
        return this.randomIntNumber() === 0 ? this.GENDER_MALE : this.GENDER_FEMALE;
    },
     
     randomDateBirth: function() {
         let Month = this.randomValue(this.monthJson);
         let Day = this.randomIntNumber(Month.days, 1);
         let year = this.randomIntNumber(2005, 1960);
         let dateBirth = Day + ' ' + Month.name + ' ' + year;
         return dateBirth;
    },

    // randomPatronymic: function () {
    // let name = this.randomValue(this.firstNameMaleJson);
    // let pMale;
    // let pFemale;
    //     if (/ей$/.test(name)) {
    //         pMale = name.replace(/ей$/, 'еевич');
    //         pFemale = name.replace(/ей$/, 'еевна');
    //     }
    //     if....
    // },
    randomPatronymic: function () {
        let name = this.randomValue(this.firstNameMaleJson);
        let patronymicMale;
        let patronymicFemale;
        if (name.slice(-3) == 'аил') {
            patronymicFemale = name.substr(0, name.length - 3) + 'айловна';
            patronymicMale = name.substr(0, name.length - 3) + 'айлович';
        }
        switch (name.slice(-2)) {
            case 'ей':
                patronymicFemale = name.substr(0, name.length - 2) + 'еевна';
                patronymicMale = name.substr(0, name.length - 2) + 'еевич';
                break;
            case 'ай':
                patronymicFemale = name.substr(0, name.length - 2) + 'аевна';
                patronymicMale = name.substr(0, name.length - 2) + 'аевич';
                break;
            case 'ий':
                patronymicFemale = name.substr(0, name.length - 2) + 'ьевна';
                patronymicMale = name.substr(0, name.length - 2) + 'ьевич';
                break;
            case 'та':
                patronymicFemale = name.substr(0, name.length - 2) + 'тична';
                patronymicMale = name.substr(0, name.length - 2) + 'тич';
                break;
            default:
                patronymicFemale = name + 'овна';
                patronymicMale = name + 'ович';
        }
        return this.person.gender === this.GENDER_FEMALE ? patronymicFemale : patronymicMale;
    },

    randomProfession: function () {
        let prof = this.randomValue(this.professionJson);
        if (this.person.gender === this.GENDER_FEMALE) {
            // U - Unisex
            while (prof.gender != 'U') {
                prof = this.randomValue(this.professionJson);
            }   
            return prof.name;
        } else {
            return prof.name;
        }
    },

    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomGender();
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurName();
        this.person.patronymic = this.randomPatronymic();
        this.person.dateBirth = this.randomDateBirth();
        this.person.profession = this.randomProfession();
        return this.person;
    }
};
