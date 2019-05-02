'use strict';

function checkDelete() {
  $('.shopping-item-controls button').click(function(e) {
    let shoppingListItem = $(e.currentTarget).parents('li');
    let shoppingListItemName = shoppingListItem.find('.shopping-item');
    if ($(e.currentTarget).is($('.shopping-item-toggle'))) {
      shoppingListItemName.toggleClass('shopping-item__checked');
    } else if ($(e.currentTarget).is($('.shopping-item-delete'))) {
      shoppingListItem.remove();
    }
  });
}

function createItem() {
  $('#js-shopping-list-form').submit(function(e){
    e.preventDefault();
    let itemName = $('#shopping-list-entry').val();
    $('.shopping-list').prepend(`
      <li>
        <span class="shopping-item">${itemName}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`);
    $('#shopping-list-entry').val('');
    $(checkDelete);
    // ^ there's probably a cleaner way to do this,
    // rather than rerunning the checkDelete function
  });
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
$(createItem);
