Blockly.Python['turtle_forward'] = function(block) {
    var text_distance = block.getFieldValue('DISTANCE');
    var code = 't.forward(' + text_distance + ')\n';
    return code;
};

Blockly.Python['turtle_forward_adv'] = function(block) {
    var value_distance = Blockly.Python.valueToCode(block, 'DISTANCE', Blockly.Python.ORDER_ATOMIC);
    var code = 't.forward(' + value_distance + ')\n';
    return code;
};

Blockly.Python['turtle_turn'] = function(block) {
    var angle_degrees = block.getFieldValue('DEGREES');
    var code = 't.right(' + angle_degrees + ')\n';
    return code;
};

Blockly.Python['turtle_pen_color'] = function(block) {
    var pen_color = block.getFieldValue('COLOR');
    var code = 't.pencolor("' + pen_color + '")\n';
    return code;
};

Blockly.Python['turtle_turn_left'] = function(block) {
    var code = 't.left(90)\n';
    return code;
};

Blockly.Python['turtle_turn_right'] = function(block) {
    var code = 't.right(90)\n';
    return code;
};

Blockly.Python['turtle_pen_up'] = function(block) {
    var code = 't.penup()\n';
    return code;
};

Blockly.Python['turtle_pen_down'] = function(block) {
    var code = 't.pendown()\n';
    return code;
};