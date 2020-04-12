var $block = $('.block_to_add').clone();

$('.click_to_add_block').click(function() {
  $(this).before($block.clone());
});