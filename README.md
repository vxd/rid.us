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
1) Селектор класса почти самый быстрый, не надо писать `.blockName .elemName` 

2) Независимость стилей, сравни: 
```
<div class="menu">
  ...
  <span class="item"><b class="item">...</b></span>
  <span class="item"></span>
</div>
```
`.menu .item` выберет оба тэга
 
 ---
 
Если все же нужно описать стили вложенного элемента, использовать _селектор дочернего элемента_:
```
//.blockName .elemName { ... } 
.blockName > .elemName { ... }
```
(в случае если в такой блок будет включен подобный, стили `.elemName` не будут перебиты).
В случае простых блочков это можно не делать.

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
.menu__item.view_highlighted.state_open { ... }
```
