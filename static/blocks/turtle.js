Blockly.Blocks['turtle_forward'] = {
    init: function() {
        this.setColour(120);
        this.appendDummyInput()
            .appendField("forward")
            .appendField(new Blockly.FieldTextInput("10"), "DISTANCE");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('turtle walks forward certain paces');
    }
};

Blockly.Blocks['turtle_forward_adv'] = {
    init: function () {
        this.setColour(120);
        this.appendValueInput("DISTANCE")
            .setCheck("Number")
            .appendField("forward");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('turtle walks forward certain paces');
    }
};

Blockly.Blocks['turtle_turn'] = {
    init: function () {
        this.setColour(120);
        this.appendDummyInput()
            .appendField("turn")
            .appendField(new Blockly.FieldAngle("90"), "DEGREES");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};

Blockly.Blocks['turtle_pen_color'] = {
    init: function () {
        this.setColour(120);
        this.appendDummyInput()
            .appendField("set pen color")
            .appendField(new Blockly.FieldColour("#ff0000"), "COLOR");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('');
    }
};

Blockly.Blocks['turtle_turn_left'] = {
    init: function() {
        this.setColour(120);
        this.appendDummyInput()
            .appendField("turn left");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('turtle turn left');
    }
};

Blockly.Blocks['turtle_turn_right'] = {
    init: function() {
        this.setColour(120);
        this.appendDummyInput()
            .appendField("turn right");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('turtle turn right');
    }
};

Blockly.Blocks['turtle_pen_up'] = {
    init: function() {
        this.setColour(120);
        this.appendDummyInput()
            .appendField("pen up");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('make turtle stop drawing');
    }
};

Blockly.Blocks['turtle_pen_down'] = {
    init: function() {
        this.setColour(120);
        this.appendDummyInput()
            .appendField("pen down");
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setTooltip('make turtle start drawing');
    }
};