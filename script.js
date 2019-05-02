'use strict';

function checkDelete() {
  // $('.shopping-item-controls').click(function(e) {
  $('.shopping-item-controls button').click(function(e) {
    let shoppingListItem = $(e.currentTarget).parents('li');
    let shoppingListItemName = shoppingListItem.find('.shopping-item');
    console.log(e.currentTarget);
    if ($(e.currentTarget).is($('.shopping-item-toggle'))) {
      shoppingListItemName.toggleClass('shopping-item__checked');
    } else if ($(e.currentTarget).is($('.shopping-item-delete'))) {
      shoppingListItem.remove();
    }
  });
}

function createItem() {
  $('#js-shopping-list-form button');
}

// function checkItems() {
//   $('.shopping-item-toggle').click(function(e) {
//     let shoppingListItem = $(e.currentTarget).parents('li').find('.shopping-item');
//     shoppingListItem.toggleClass('shopping-item__checked');
//   });
// }

// function deleteItems() {
//   $('.shopping-item-delete').click(function(e) {
//     let shoppingListItem = $(e.currentTarget).parents('li');
//     console.log(shoppingListItem);
//     shoppingListItem.remove();
//   });
// }
// $(checkItems);
// $(deleteItems);

//^ condensed both of these into one function :)



$(checkDelete);