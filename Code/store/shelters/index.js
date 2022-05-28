export const state = () => {
  return {
    sheltersList : [
      {
        "id": "12",
        "photo": "Shelters_1.jpg",
        "price": 0,
        "address": "вул. Миколи Пимоненка, 3",
        "city_region": "Сихівський, Львів",
        "area": 110,
        "rooms_num": 1,
        "floor": 1,
        "rent_period": "кілька тижнів",
        "accomodations": "ліжко",
        "phone_number": "+380967777777",
        "description": "Спортивний зал перетворили у приисток, є душ/роздягальня/спальні місця. Чекаємо всіх хто потребує прихисток!"
      },

      {
        "id": "22",
        "photo": "Shelters_2.jpg",
        "price": 0,
        "address": "вул. Куликівська, 18",
        "city_region": "Франківський, Львів",
        "area": 95,
        "rooms_num": 4,
        "floor": 2,
        "rent_period": "кілька днів",
        "accomodations": "кімната",
        "phone_number": "+380967777777",
        "description": "Приватний будинок, окрема кімната, 2 дивана, окремий двір, є опалення, вода, електроенергія! Біля будинку є дитячий майданчик, школа!"
      },

      {
        "id": "32",
        "photo": "Shelters_3.jpg",
        "price": 0,
        "address": "вул. Гіпсова, 17",
        "city_region": "Франківський, Львів",
        "area": 43,
        "rooms_num": 1,
        "floor": 2,
        "rent_period": "до перемоги",
        "accomodations": "ціле житло",
        "phone_number": "+380967777777",
        "description": "Невелика 1-кімнатна квартира зі свіжим ремонтом. В квартирі знаходиться все необхідне для проживання двох людей. Прошу підтримувати чистоту і порядок."
      },
    ]
  }
}

export const getters = {
  sheltersList (state) {
    return state.sheltersList
  }
}
