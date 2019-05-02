'use strict';


function checkDelete() {
  $('ul').on('click', 'button', function(e) {
    let shoppingListItem = $(this).closest('li');
    let shoppingListItemName = shoppingListItem.find('.shopping-item');
    if ($(this).is($('.shopping-item-toggle'))) {
      shoppingListItemName.toggleClass('shopping-item__checked');
    } else if ($(this).is($('.shopping-item-delete'))) {
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
  });

  // ^ there's probably a cleaner way to do this,
  // rather than rerunning the checkDelete function
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
$('input').prop('required',true);
