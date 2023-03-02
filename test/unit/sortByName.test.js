const sorting = require('../../app.js');

describe('Books names test suit', () => {
   it('Сортировка 3 книг', () => {
      const data = [
         'Гарри Поттер',
         'Властелин Колец',
         'Волшебник изумрудного города'
      ];
      const expected = [
         'Властелин Колец',
         'Волшебник изумрудного города',
         'Гарри Поттер'
      ];
      const result = sorting.sortByName(data);
      expect(result).toEqual(expected);
   });

   it('Function should throw exception when used without param', () => {
      expect(() => sorting.sortByName()).toThrow(TypeError);
   });

   it('Сортировка 5 книг', () => {
      const data = ['Вий', 'Ямал', 'Брат', 'Арфа', 'Зорро'];
      const expected = ['Арфа', 'Брат', 'Вий', 'Зорро', 'Ямал'];
      const result = sorting.sortByName(data);
      expect(result).toEqual(expected);
   });

   it('Сортировка - книг нет.', () => {
      const data = [];
      const expected = [];
      const result = sorting.sortByName(data);
      expect(result).toEqual(expected);
   });

   it('Сортировка двух одинаковых книг.', () => {
      const data = ['Солнце', 'Солнце'];
      const expected = ['Солнце', 'Солнце'];
      const result = sorting.sortByName(data);
      expect(result).toEqual(expected);
   });
});
