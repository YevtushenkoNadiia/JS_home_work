console.log('Sample JavaScript #4 HW #18');
/* eslint-disable multiline-comment-style */

 
  // let myDate = new Date(Date.now());

  // let year = myDate.getFullYear();
  // let month = myDate.getMonth() + 1;
  // if (month<10) \{
  //   month = '0' + month;
  // }
  // let date = myDate.getDate();
  // if (date<10) {
  //   date = '0' + date;
  // }

  // let formattedDate = year + '/' + month + '/' + date;
  // document.getElementById('result').innerHTML = formattedDate;



/*
 * #1
 *
 * Создайте функцию wordsList(str, subStr), принимающую два параметра:
 * строку текста произвольной длины и подстроку для поиска.
 * Функция должна вернуть коллекцию уникальных слов в нижнем регистре, без символов-разделителей, т.е.:
 * из строки str необходимо удалить все следующие символы: . , ! ? ; : "
 * привести строку к нижнему регистру
 * получить коллекцию уникальных, неповторяющихся слов, в которых содержится подстрока,
 * переданная в параметре subStr.
 */

// let myLongStr = 'Lorem". ipsum, dolor! sit? amet: consectetur; adipisicing elit. Dolores quas alias animi inventore delectus quo non, fugit officiis a repellendus facere quae perferendis quos doloremque in, accusantium eum sint corrupti similique voluptatibus omnis mollitia id ex. Adipisci temporibus laborum fugit aperiam, minima recusandae nemo! Voluptas, fugiat sunt saepe dignissimos quam possimus vero voluptatibus quas commodi ipsa vitae, est error voluptate ex cum? Ab, numquam doloremque sunt id molestias explicabo tenetur? Corporis, quisquam voluptatem doloremque itaque est quod impedit, commodi illo eius dicta, enim reiciendis quidem minus tempora sapiente ratione. Repudiandae tempora officia voluptate nam cum dolore corrupti dolorem asperiores quisquam dicta, officiis distinctio ad possimus earum rerum ipsam veritatis enim voluptatum ea numquam doloremque deleniti sapiente velit maxime. Temporibus nostrum perspiciatis molestiae tempora, quo molestias numquam atque obcaecati unde quos itaque modi fugiat dolorem non rerum harum, esse, impedit voluptas minus? Deleniti atque reiciendis voluptate aut consequuntur blanditiis dolores dolorem magni adipisci eius unde, rerum explicabo labore molestias non et exercitationem mollitia iure. Est libero recusandae et, animi sunt a blanditiis consequuntur nemo iste laudantium quos sint ipsa ad possimus sequi dolor ipsum mollitia facilis? Officia quasi rerum atque esse voluptatum quae eos! Sequi eum repellat, molestiae enim soluta quos, tempora recusandae nulla facere quae assumenda harum modi laboriosam. Earum error aspernatur explicabo? Earum non, nesciunt distinctio quod dolores facere, placeat consectetur illum omnis eligendi ullam! Totam laudantium voluptates esse inventore molestias sapiente corrupti temporibus iure! Explicabo laudantium repellendus ullam laboriosam. Odit nostrum sit autem at laboriosam? Autem cupiditate facilis dolore nemo perferendis facere! Maiores iure voluptas obcaecati nihil. Rerum dignissimos fugit a dolorem earum soluta, ut at ullam repudiandae sunt, voluptatum fugiat reiciendis distinctio ipsum, neque magni mollitia laborum perferendis nihil voluptatem adipisci assumenda aperiam! Libero natus fuga fugiat corrupti recusandae vel asperiores earum qui explicabo doloremque, magni error expedita dolor quia eos omnis nostrum facilis fugit molestiae culpa placeat eius! Fuga cum obcaecati esse, inventore cumque quibusdam fugiat beatae? Delectus rerum vel repellat fugiat eius id doloribus. Suscipit hic, vel nobis optio obcaecati cupiditate ullam? Facere, vitae natus, reprehenderit debitis, ea reiciendis doloribus possimus repudiandae nihil accusamus iusto neque ex voluptate nam fugiat voluptates atque facilis sed. Vitae non iure placeat, nam doloribus temporibus consectetur esse distinctio sit tempore, corrupti vero amet odit vel nostrum voluptatum! Ipsum nihil omnis tenetur debitis, sit eligendi! Suscipit vitae quae nemo eveniet veritatis. Perspiciatis modi expedita placeat aut voluptate officiis atque quasi tenetur nulla animi! Minus omnis nesciunt beatae ullam itaque facilis a consequatur, at fugiat natus placeat inventore vitae, cumque quo ipsum? Deserunt suscipit velit dolor nemo quasi deleniti nisi, temporibus explicabo laboriosam, corrupti, ad quibusdam ratione praesentium. Quo totam, qui libero, id iusto, asperiores vitae dolorem perferendis minus distinctio animi repudiandae. Reprehenderit maxime eum asperiores velit praesentium nulla soluta minus at ad consequuntur, error deleniti non corrupti voluptatibus ullam repellat quod ipsa tempora ut! Nemo corrupti aut quia corporis odit maxime laudantium nam unde perspiciatis est, dicta perferendis debitis et quod deleniti! Distinctio, sapiente ducimus ipsam id cumque eveniet totam veritatis nisi ex quis amet quod, quisquam fugit est perferendis quia culpa consequatur eaque incidunt. Rem repudiandae voluptatibus adipisci ad soluta deserunt sapiente culpa saepe veritatis similique illo veniam ipsum ducimus nisi, iste est accusantium unde nesciunt laboriosam itaque beatae eius exercitationem neque quam. In aspernatur totam doloribus quisquam voluptatem commodi, nostrum reiciendis, esse maxime ipsa laudantium ut sed quos. Repudiandae odio sunt minus reprehenderit, laudantium aliquam ea aperiam, voluptas placeat nemo harum excepturi commodi nostrum perspiciatis aut iusto. Accusamus ad voluptatem eaque, distinctio accusantium unde voluptatum esse autem molestiae obcaecati numquam. Cumque sint, est temporibus, quia animi iste quo repudiandae, laudantium voluptatibus ducimus architecto. Vel doloribus obcaecati perspiciatis voluptatum voluptatibus molestias sit, sed reiciendis esse ea exercitationem delectus quos officiis aliquid porro architecto magni sint temporibus illo aspernatur reprehenderit deserunt deleniti doloremque? Aliquam, ut minima. Architecto et, magnam dignissimos nam animi facilis? Recusandae quis ex repellat, voluptatibus veritatis modi beatae ea provident? Excepturi eligendi laudantium beatae dolores eum, accusantium eveniet ipsa quidem voluptas repellendus illo veniam magnam saepe asperiores quos modi in necessitatibus officiis tenetur dolorem, minima voluptate similique praesentium! Necessitatibus sint, itaque impedit, laboriosam, ratione blanditiis at dolor quos aliquam nobis nemo amet quia. Nostrum sit nesciunt, illum deleniti, aliquid, aut ipsa sapiente officia molestias ipsam modi. Quod cupiditate vel quidem iure nemo? Quisquam beatae natus est non amet nostrum dicta reiciendis expedita. Consequatur quo pariatur voluptatem voluptatum sed velit molestiae nemo odio sequi in? Soluta laboriosam ipsam incidunt architecto pariatur, harum molestiae dignissimos quaerat ducimus, dolorem autem qui aliquam doloremque tenetur itaque optio fuga, iusto officia at? Esse blanditiis veritatis voluptas, similique, ipsum, voluptate illum beatae ducimus magni perferendis fuga ea? Est voluptatum culpa delectus voluptatibus doloribus recusandae porro veritatis, molestiae magni soluta, possimus quidem voluptas suscipit obcaecati dolores voluptatem neque, asperiores labore corrupti dicta. Consequatur eius, inventore autem doloremque recusandae quae! Neque facere laudantium blanditiis inventore temporibus nostrum praesentium aperiam perspiciatis dicta perferendis ullam ab impedit adipisci dolorem exercitationem dignissimos ipsum minus incidunt tempore in, illo placeat odio dolorum. Maiores sed est id officiis praesentium ratione cumque ut iste alias laboriosam. Repellendus deserunt ut optio exercitationem ab repudiandae ex doloremque nisi magni numquam accusantium recusandae nesciunt sint quisquam odio, eum aliquam et excepturi culpa praesentium nam laudantium soluta dolorem saepe? Dicta hic sint totam temporibus expedita iste velit, minus blanditiis similique! Nemo quam natus explicabo voluptas perspiciatis ex molestias blanditiis magnam quibusdam, consequatur culpa ducimus facere soluta accusamus porro ratione velit fuga eaque. Natus consequuntur odit dolore illo totam minima, cum explicabo expedita debitis aperiam, tempore ducimus eum inventore odio assumenda atque, recusandae error. Doloribus omnis voluptate fugit ad quam a, mollitia culpa commodi libero vero delectus corporis fuga blanditiis nesciunt aut porro incidunt, iure dolore placeat necessitatibus odio quaerat iste. Necessitatibus enim earum praesentium tenetur, temporibus pariatur recusandae perferendis reiciendis numquam consequuntur alias non. Debitis commodi quia, magni minus quaerat aliquam assumenda repudiandae doloribus consectetur ipsam sapiente animi! Dolorem commodi tempore, quos reprehenderit ducimus adipisci cum quia maiores tenetur ex modi quibusdam incidunt. Minima, amet?';

// let wordsList = function(str, subStr){
//   let regex = new RegExp('\\.|,|\\?|!|:|;|"', 'gi'); //g - глобально //i - игнорирует регистр
//   //const regex2 = new RegExp('\\w+');Конструктор RegExp создаёт объект регулярного выражения для сопоставления текста с шаблоном.
//   let arr = str
//     .toLowerCase()
//     .replace(regex, '') //возвращает новую строку c заменёнными разделителями на пробелы 
//     .split(' ')//разобьем строку в массив с помощью split по разделителю 
//     .filter((arrItem) => arrItem.indexOf(subStr) > -1);
//     //Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
  
//     let res = new Set();

//   arr.forEach((arrItem) => {
//     res.add(arrItem);
//   });

//   return res;
// };


let myLongStr = 'Lorem". ipsum, dolor! sit? amet: consectetur; adipisicing elit. Dolores quas alias animi inventore delectus quo non, fugit officiis a repellendus facere quae perferendis quos doloremque in, accusantium eum sint corrupti similique voluptatibus omnis mollitia id ex. Adipisci temporibus laborum fugit aperiam, minima recusandae nemo! Voluptas, fugiat sunt saepe dignissimos quam possimus vero voluptatibus quas commodi ipsa vitae, est error voluptate ex cum? Ab, numquam doloremque sunt id molestias explicabo tenetur? Corporis, quisquam voluptatem doloremque itaque est quod impedit, commodi illo eius dicta, enim reiciendis quidem minus tempora sapiente ratione. Repudiandae tempora officia voluptate nam cum dolore corrupti dolorem asperiores quisquam dicta, officiis distinctio ad possimus earum rerum ipsam veritatis enim voluptatum ea numquam doloremque deleniti sapiente velit maxime. Temporibus nostrum perspiciatis molestiae tempora, quo molestias numquam atque obcaecati unde quos itaque modi fugiat dolorem non rerum harum, esse, impedit voluptas minus? Deleniti atque reiciendis voluptate aut consequuntur blanditiis dolores dolorem magni adipisci eius unde, rerum explicabo labore molestias non et exercitationem mollitia iure. Est libero recusandae et, animi sunt a blanditiis consequuntur nemo iste laudantium quos sint ipsa ad possimus sequi dolor ipsum mollitia facilis? Officia quasi rerum atque esse voluptatum quae eos! Sequi eum repellat, molestiae enim soluta quos, tempora recusandae nulla facere quae assumenda harum modi laboriosam. Earum error aspernatur explicabo? Earum non, nesciunt distinctio quod dolores facere, placeat consectetur illum omnis eligendi ullam! Totam laudantium voluptates esse inventore molestias sapiente corrupti temporibus iure! Explicabo laudantium repellendus ullam laboriosam. Odit nostrum sit autem at laboriosam? Autem cupiditate facilis dolore nemo perferendis facere! Maiores iure voluptas obcaecati nihil. Rerum dignissimos fugit a dolorem earum soluta, ut at ullam repudiandae sunt, voluptatum fugiat reiciendis distinctio ipsum, neque magni mollitia laborum perferendis nihil voluptatem adipisci assumenda aperiam! Libero natus fuga fugiat corrupti recusandae vel asperiores earum qui explicabo doloremque, magni error expedita dolor quia eos omnis nostrum facilis fugit molestiae culpa placeat eius! Fuga cum obcaecati esse, inventore cumque quibusdam fugiat beatae? Delectus rerum vel repellat fugiat eius id doloribus. Suscipit hic, vel nobis optio obcaecati cupiditate ullam? Facere, vitae natus, reprehenderit debitis, ea reiciendis doloribus possimus repudiandae nihil accusamus iusto neque ex voluptate nam fugiat voluptates atque facilis sed. Vitae non iure placeat, nam doloribus temporibus consectetur esse distinctio sit tempore, corrupti vero amet odit vel nostrum voluptatum! Ipsum nihil omnis tenetur debitis, sit eligendi! Suscipit vitae quae nemo eveniet veritatis. Perspiciatis modi expedita placeat aut voluptate officiis atque quasi tenetur nulla animi! Minus omnis nesciunt beatae ullam itaque facilis a consequatur, at fugiat natus placeat inventore vitae, cumque quo ipsum? Deserunt suscipit velit dolor nemo quasi deleniti nisi, temporibus explicabo laboriosam, corrupti, ad quibusdam ratione praesentium. Quo totam, qui libero, id iusto, asperiores vitae dolorem perferendis minus distinctio animi repudiandae. Reprehenderit maxime eum asperiores velit praesentium nulla soluta minus at ad consequuntur, error deleniti non corrupti voluptatibus ullam repellat quod ipsa tempora ut! Nemo corrupti aut quia corporis odit maxime laudantium nam unde perspiciatis est, dicta perferendis debitis et quod deleniti! Distinctio, sapiente ducimus ipsam id cumque eveniet totam veritatis nisi ex quis amet quod, quisquam fugit est perferendis quia culpa consequatur eaque incidunt. Rem repudiandae voluptatibus adipisci ad soluta deserunt sapiente culpa saepe veritatis similique illo veniam ipsum ducimus nisi, iste est accusantium unde nesciunt laboriosam itaque beatae eius exercitationem neque quam. In aspernatur totam doloribus quisquam voluptatem commodi, nostrum reiciendis, esse maxime ipsa laudantium ut sed quos. Repudiandae odio sunt minus reprehenderit, laudantium aliquam ea aperiam, voluptas placeat nemo harum excepturi commodi nostrum perspiciatis aut iusto. Accusamus ad voluptatem eaque, distinctio accusantium unde voluptatum esse autem molestiae obcaecati numquam. Cumque sint, est temporibus, quia animi iste quo repudiandae, laudantium voluptatibus ducimus architecto. Vel doloribus obcaecati perspiciatis voluptatum voluptatibus molestias sit, sed reiciendis esse ea exercitationem delectus quos officiis aliquid porro architecto magni sint temporibus illo aspernatur reprehenderit deserunt deleniti doloremque? Aliquam, ut minima. Architecto et, magnam dignissimos nam animi facilis? Recusandae quis ex repellat, voluptatibus veritatis modi beatae ea provident? Excepturi eligendi laudantium beatae dolores eum, accusantium eveniet ipsa quidem voluptas repellendus illo veniam magnam saepe asperiores quos modi in necessitatibus officiis tenetur dolorem, minima voluptate similique praesentium! Necessitatibus sint, itaque impedit, laboriosam, ratione blanditiis at dolor quos aliquam nobis nemo amet quia. Nostrum sit nesciunt, illum deleniti, aliquid, aut ipsa sapiente officia molestias ipsam modi. Quod cupiditate vel quidem iure nemo? Quisquam beatae natus est non amet nostrum dicta reiciendis expedita. Consequatur quo pariatur voluptatem voluptatum sed velit molestiae nemo odio sequi in? Soluta laboriosam ipsam incidunt architecto pariatur, harum molestiae dignissimos quaerat ducimus, dolorem autem qui aliquam doloremque tenetur itaque optio fuga, iusto officia at? Esse blanditiis veritatis voluptas, similique, ipsum, voluptate illum beatae ducimus magni perferendis fuga ea? Est voluptatum culpa delectus voluptatibus doloribus recusandae porro veritatis, molestiae magni soluta, possimus quidem voluptas suscipit obcaecati dolores voluptatem neque, asperiores labore corrupti dicta. Consequatur eius, inventore autem doloremque recusandae quae! Neque facere laudantium blanditiis inventore temporibus nostrum praesentium aperiam perspiciatis dicta perferendis ullam ab impedit adipisci dolorem exercitationem dignissimos ipsum minus incidunt tempore in, illo placeat odio dolorum. Maiores sed est id officiis praesentium ratione cumque ut iste alias laboriosam. Repellendus deserunt ut optio exercitationem ab repudiandae ex doloremque nisi magni numquam accusantium recusandae nesciunt sint quisquam odio, eum aliquam et excepturi culpa praesentium nam laudantium soluta dolorem saepe? Dicta hic sint totam temporibus expedita iste velit, minus blanditiis similique! Nemo quam natus explicabo voluptas perspiciatis ex molestias blanditiis magnam quibusdam, consequatur culpa ducimus facere soluta accusamus porro ratione velit fuga eaque. Natus consequuntur odit dolore illo totam minima, cum explicabo expedita debitis aperiam, tempore ducimus eum inventore odio assumenda atque, recusandae error. Doloribus omnis voluptate fugit ad quam a, mollitia culpa commodi libero vero delectus corporis fuga blanditiis nesciunt aut porro incidunt, iure dolore placeat necessitatibus odio quaerat iste. Necessitatibus enim earum praesentium tenetur, temporibus pariatur recusandae perferendis reiciendis numquam consequuntur alias non. Debitis commodi quia, magni minus quaerat aliquam assumenda repudiandae doloribus consectetur ipsam sapiente animi! Dolorem commodi tempore, quos reprehenderit ducimus adipisci cum quia maiores tenetur ex modi quibusdam incidunt. Minima, amet?';

let wordsList = function(str, subStr){
  str = str.replaceAll('.', '');
  str = str.replaceAll(',', '');
  str = str.replaceAll('!', '');
  str = str.replaceAll('?', '');
  str = str.replaceAll(':', '');
  str = str.replaceAll('"', '');

  let arr = str
    .toLowerCase()
    .split(' ')//разобьем строку в массив с помощью split по разделителю 
    .filter((arrItem) => arrItem.indexOf(subStr) > -1);
    //Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.
  
    let res = new Set();

  arr.forEach((arrItem) => {
    res.add(arrItem);
  });

  return res;
};

console.log(wordsList(myLongStr, 'lore')); // {"lorem", "dolores", "doloremque", "dolore", "dolorem"}
console.log(wordsList(myLongStr, 'no')); // {"non", "nostrum", "nobis"}
console.log(wordsList(myLongStr, 'rep')); // {"repellendus", "repudiandae", "repellat", "reprehenderit"}

/*
 * #2
 *
 * Создайте функцию getLocalDate(date, isSeconds, isISO), которая будет принимать любую
 * дату от конструктора new Date и преобразовывать ее в следующие форматы в зависимости от параметров:
 * getLocalDate(date)              → dd.mm.yyyy, hh:mm,    например: 16.07.2019, 00:15
 * getLocalDate(date, true)        → dd.mm.yyyy, hh:mm:ss, например: 16.07.2019, 00:15:32
 * getLocalDate(date, false, true) → yyyy-mm-dd, hh:mm,    например: 2019-06-02, 00:15
 * getLocalDate(date, true, true)  → yyyy-mm-dd, hh:mm:ss, например: 2019-06-02, 00:15:32
 * date – любая дата из конструктора new Date().
 * isSeconds – опциональный параметр для отображения секунд в дате.
 * isISO – опциональный параметр переключения формата даты.
 */

let myDate = new Date();

let getLocalDate = (date, isSeconds = false, isISO = false) => {
  //isSeconds = false, isISO = false - принимают параметр false, если ничего не передано
  const reg = new RegExp(':\\d{2}$', 'g');
  let res;

  if (!isISO) res = isSeconds
    ? date.toLocaleString() //Метод toLocaleString () возвращает строку, отражающий число в соответствии с настройками языка.
    : date.toLocaleString().replace(reg, '');
  else {
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 9 ? `0${date.getMonth() + 1}` : date.getMonth() + 1; 
    //getMonth() возвращает месяц от 0 до 11. //1 добавляется к месяцу перед заполнением, чтобы сохранить его от 1 до 12
    const day = date.getDate() < 9 ? `0${date.getDate()}` : date.getDate();
    const hour = date.getHours() < 9 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 9 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 9 ? `0${date.getSeconds()}` : date.getSeconds();

    res = isSeconds
      ? `${year}-${month}-${day}, ${hour}:${minutes}:${seconds}`
      : `${year}-${month}-${day}, ${hour}:${minutes}`;
  }

  return res;
};

// var date = new Date();
// console.log( (date.getMonth() < 9 ? '0': '') + (date.getMonth()+1) );


// getDate()возвращает день месяца (от 1 до 31)
// getMonth()возвращает месяц (от 0 до 11 ) <отсчет от нуля, 0 = январь, 11 = декабрь
// getFullYear() возвращает год (четыре цифры) < не использоватьgetYear()

// function formatDateToString(date){
   // 01, 02, 03, ... 29, 30, 31
  //  var dd = (date.getDate() < 10 ? '0' : '') + date.getDate();
   // 01, 02, 03, ... 10, 11, 12
  //  var MM = ((date.getMonth() + 1) < 10 ? '0' : '') + (date.getMonth() + 1);
   // 1970, 1971, ... 2015, 2016, ...
  //  var yyyy = date.getFullYear();

   // create the format you want
//    return (dd + "-" + MM + "-" + yyyy);
// }

console.log(getLocalDate(myDate)); // 16.07.2019, 00:15
console.log(getLocalDate(myDate, true)); // 16.07.2019, 00:15:32
console.log(getLocalDate(myDate, false, true)); // 2019-06-02, 00:15
console.log(getLocalDate(myDate, true, true)); // 2019-06-02, 00:15:32
console.log(getLocalDate(new Date(123456))); // 01.01.1970, 03:02
console.log(getLocalDate(new Date(123456), true)); // 1970-01-01, 03:02:03
console.log(getLocalDate(new Date(123456), false, true)); // 1970-01-01, 03:02:03
console.log(getLocalDate(new Date(123456), true, true)); // 1970-01-01, 03:02:03


console.log(getLocalDate(new Date(123456)) === '01.01.1970, 03:02');
console.log(getLocalDate(new Date(123456), true) === '01.01.1970, 03:02:03');
console.log(getLocalDate(new Date(123456), false, true) === '1970-01-01, 03:02');
console.log(getLocalDate(new Date(123456), true, true) === '1970-01-01, 03:02:03');
console.log(getLocalDate(new Date(1999999123456)) === '18.05.2033, 06:18');
console.log(getLocalDate(new Date(1999999123456), true) === '18.05.2033, 06:18:43');
console.log(getLocalDate(new Date(1999999123456), false, true) === '2033-05-18, 06:18');
console.log(getLocalDate(new Date(1999999123456), true, true) === '2033-05-18, 06:18:43');

/*
 * #3
 *
 * Создайте функцию getWeekDay(date), которая принимает дату в виде строки в формате 'yyyy-mm-dd'
 * и выводит текущий день недели: "понедельник", "вторник", … "воскресенье".
 */

let getWeekDay = (d) => {
  let date = new Date(d);
  let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];

  return days[date.getDay()];

  //Метод getDay()возвращает порядковый номер дня недели последний день по местному времени, где 0 соответствует воскресенью.
}


console.log(getWeekDay('2019-01-30')); // среда
console.log(getWeekDay('2019-07-16')); // вторник
console.log(getWeekDay('2019-07-27')); // суббота
console.log(getWeekDay('2021-04-20')); // суббота

/*
 * #4
 *
 * Напишите функцию, getLocalDay(date) которая возвращает день недели для даты date.
 * День нужно возвратить в европейской нумерации, т.е. понедельник имеет номер 1, вторник номер 2, …, воскресенье – номер 7.
 */


let getLocalDay = (d) => {
  let date = new Date(d);
  let day = date.getDay();  
  //Метод getDay()возвращает порядковый номер дня недели последний день по местному времени, где 0 соответствует воскресенью.

  if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
    day = 7;
  }

  return day;
}

console.log(getLocalDay('2019-07-16')); // 2
console.log(getLocalDay('2019-07-25')); // 4
console.log(getLocalDay('2019-07-27')); // 6

/*
 * #5
 *
 * Создайте функцию getDateAgo(date, days), которая возвращает дату,
 * которая была days дней назад от указанной даты date.
 * Дата принимается и возвращается в формате YYYY-MM-DD.
 */


// let getDateAgo = (d, days) => {
//   const date = new Date(d);

//   date.setDate(date.getDate() - days);
//   return date.toLocaleString().replace(/(\d.*),\s+(\d.*)/gu, '$1');
// };

let getDateAgo = (d, days) => {
  let date = new Date(d);
  date.setDate(date.getDate() - days);
  //Метод setDate() устанавливает день месяца указанной даты по местному времени.
  //Метод getDate()возвращает день месяца через дату по местному времени.

  return date.toLocaleString().replace(/(\d.*),\s+(\d.*)/g, '$1');
  //replace(/(\d.*),\s+(\d.*)/g, '$1') - дата вида 28.01.2019 вместо 28.01.2019, 03:00:00
}


console.log(getDateAgo('2019-01-29', 1)); // 28.01.2019
console.log(getDateAgo('2019-01-29', 2)); // 27.01.2019
console.log(getDateAgo('2019-01-29', 365)); // 29.01.2018



/*
 * let formatter = new Intl.DateTimeFormat('uk-UA', {
 *   year: 'numeric',
 *   month: 'long',
 *   day: 'numeric'
 * });
 */
  /*
   * вариант с formatter вернет дату вида
   * 28 січня 2019 р.
   * return formatter.format(date)
   */

/*
 * #6
 *
 * Используя в качестве основы, объект car, описанный в прошлом занятии, создайте прототип Car,
 * реализующий те же поля (#17.4) и методы(#17.5 и #17.6) у создаваемых объектов.
 *
 * Например:
 * let car = new Car(2000, 'Lacetti', 'Chevrolet', 2010);
 * let car2 = new Car(5000, 'FX50 AWD', 'Infinite', 2019);
 *
 * Способ создания прототипа не регламентирован.
 * Объекты и их методы, созданные прототипом должны полностью соответствовать объектам из прошлого задания.
 */

let Car = function (engine, model, name, year) {
  this.engine = engine;
  this.model = model;
  this.name = name;
  this.year = year;
};

Object.defineProperties(Car.prototype, {
  used: {
    get() {
      let currentYear = new Date().getFullYear();

      return this.year !== currentYear ? 'used' : 'new';
    },
    set(value) {
      let currentYear = new Date().getFullYear();

      if( value === 'new' && this.year !== currentYear) {
        this.year = currentYear;
      }
    }
  }
});
//Метод Object.defineProperties() определяет новые или изменяет существующие свойства, возвращая этот объект.

Car.prototype.info = function () {
  return `${this.name} ${this.model}, ${this.engine}cc, year ${this.year}, ${this.used}`;
};


let car = new Car(5000, 'Mercedes', 'Daimler', 2020);
let car2 = new Car(3000, 'BMW', 'Rolls-Royce', 2016);
let car3 = new Car(6000, 'Lexus', 'Toyota', 2018);


console.log(car.info()); // chevrolet Lacetti, 2010cc, year 2010, used
car.used = 'new';
console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- год изменен
car.used = 'used';
console.log(car.info()); // chevrolet Lacetti, 2019cc, year 2019, new -- изменения не выполняются
console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new
car.used = 'used';
console.log(car2.info()); // infinite FX50 AWD, 2019cc, year 2019, new -- изменения не выполняются

/*
 * #7
 * Напишите функцию testPerformance(iterations, func) для тестирования производительности любых, переданных ей в качестве параметра функций.
 * iterations – количество повторений для тестирования.
 * func – тестируемая функция.
 *
 * Если в качестве параметра передается что-либо кроме функции, тестирование не выполняется, возвращается 0.
 */
let testPerformance = (iterations, func) => {
  let time = Date.now();

  if (typeof func === 'function') 
  for (let i = iterations; i--;) 
  func();

  return Date.now() - time;
};

// данная функция необходима для корректного тестирования кода
function test1() {
  let str = myLongStr;
  while (str.indexOf('o') !== -1) str = str.replace('o', '');
  while (str.indexOf('a') !== -1) str = str.replace('a', '');
  while (str.indexOf('e') !== -1) str = str.replace('e', '');
  while (str.indexOf('u') !== -1) str = str.replace('u', '');
  while (str.indexOf('i') !== -1) str = str.replace('i', '');
}

// данная функция необходима для корректного тестирования кода
function test2() {
  const reg = new RegExp('[oaeui]', 'gui');

  myLongStr.replace(reg, '');
}

console.log(testPerformance(100, test1)); // time
console.log(testPerformance(100, test2)); // time
console.log(testPerformance(100, 12345)); // 0