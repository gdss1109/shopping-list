/* this is first */

$('#js-shopping-list-form').submit(function(event) {

    // stop default submission
    event.preventDefault();

    // get text value for new item
    const listItem = $('#shopping-list-entry').val();


    // clear text input 
    $('#shopping-list-entry').val('');

    // add new shopping list item as li
    $('.shopping-list').append(
      `<li>
      <span class="shopping-item">${listItem}</span>
      <div class="shopping-item-controls">
        <button class="shopping-item-toggle">
          <span class="button-label">check</span>
        </button>
        <button class="shopping-item-delete">
          <span class="button-label">delete</span>
        </button>
      </div>
    </li>`);
  });

// check and uncheck
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

// removing 
$('.shopping-list').on('click', '.shopping-item-delete', function(event) {
    $(this).closest('li').remove();
  });