 Названия классов из нескольких слов пишем кэмелкейсом:
```
.menuCrazyNice
```

---

Элемент именуем по принципу `.blockName__elemName`:
```
<div class="menu">
  ...
  <span class="menu__item"></span>
</div>
```
```
.menu__item { ... }
```
Почему:

1) Селектор класса самый быстрый, не надо писать `.blockName .blockName__elemName` достаточно `.blockName__elemName`

2) Независимость стилей, сравни: 
```
<div class="menu">
  ...
  <span class="item"><b class="item">...</b></span>
  <span class="item"></span>
</div>
```
`.menu .item` выберет оба тэга. В таком случае будет безопаснее даже:
```
<div class="menu">
  ...
  <span class="menu__item"><b class="item">...</b></span>
  <span class="menu__item"></span>
</div>
```
 
 ---
 
Если все же нужно описать стили вложенного элемента, использовать _селектор дочернего элемента_:
```
//.blockName .blockName__elemName { ... } 
.blockName > .blockName__elemName { ... }
```
(в случае если в такой элемент будет включен еще один, стили второго `.blockName__elemName` не будут перебиты).

В случае простых блочков это можно не делать.

Внимание! Все равно избегать наследования!

 ---
 
 Модификаторы: `state_...`, `view_...` (оговаривать добавление новых):
```
<div class="menu state_open">
  ...
  <span class="menu__item state_open"></span>
  <span class="menu__item"></span>
  <span class="menu__item view_highlighted"></span>
  <span class="menu__item"></span>
</div>
```
```
.menu { ... }
.menu.state_open { ... }

.menu__item { ... }
.menu__item.state_open { ... }
.menu__item.view_highlighted { ... }
.menu__item.view_highlighted.state_open { ... } // если надо
```
