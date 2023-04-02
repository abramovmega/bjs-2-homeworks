//Задача № 1
function cachingDecoratorNew(func) {
  let cache = [];

  function wrapper(...args) {
    const hash = md5(args); // получаем правильный хэш с помощью md5
    let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хэш которого равен нашему хэшу
    if (objectInCache) { // если элемент найден
      console.log(objectInCache);
      console.log("Из кэша: " + objectInCache.result); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
      return "Из кэша: " + objectInCache.result;
    }

    let result = func(...args); // в кэше результата нет - придётся считать
    cache.push({hash,result}); // добавляем элемент с правильной структурой
    if (cache.length > 5) {
      cache.shift() // если слишком много элементов в кэше надо удалить самый старый (первый) 
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;
  }
  return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
  let timerId = null;
  function wrapper(...args) {
    if (timerId === null) {
      func(...args);
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => timerId = null, ms);
  }
  return wrapper;
}

function debounceDecorator2(func, ms) {
  let timerId = null;
  function wrapper(...args) {
    if (timerId === null) {
      func(...args);
    }
    clearTimeout(timerId);
    timerId = setTimeout(() => timerId = null, ms);
    wrapper.count++;
  }
  return wrapper;
}
