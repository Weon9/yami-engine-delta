/* globals LunaEngine: false */

(function() {
    // Status Spritesets
    var HUD = {
        /* Position */
        x: 200,
        y: 460,

        /* Grid and size */
        width:  624,
        height: 180,
        grid:   4,
        direction: 'horizontal',
    };

    // Status Elements
    var GUISprites = {
        spriteFace: {
            /* GUI Type */
            class: 'GUIFace',

            /* Position */
            x: 0,
            y: 0,

            /* Color */
            tone: [0,0,0,0],

            /* Basic Properties */
            faceName:  '{this.actor.faceName()}',
            faceIndex: '{this.actor.faceIndex()}',

            /* Conditional Properties */
            conditional: [
                {
                    condition: 'this.actor.hpRate() < 0.5',
                    properties: {
                        tone: [96,0,0,0]
                    }
                },

                {
                    condition: 'this.actor.isDead()',
                    properties: {
                        tone: [0,0,0,255]
                    }
                },

                {
                    condition: 'this.isSelectingActor()',
                    properties: {
                        tone: [64,64,64,0]
                    }
                }
            ]
        }, // spriteFace

        spriteName: {
            /* GUI Type */
            class: 'GUIText',

            /* Position */
            x: 0,
            y: 0,

            /* Color */
            tone: [0,0,0,0],

            /* Basic Properties */
            text: '{this.actor.name()}',

            fontFace: 'GameFont',
            fontSize: '24',

            textColor: '#ffffff',
            outlineColor: 'rgba(0,0,0,0.5)',

            /* Conditional Properties */
            conditional: [
                {
                    condition: 'this.actor.hpRate() < 0.5',
                    properties: {
                        textColor: '{this.crisisColor()}'
                    }
                },

                {
                    condition: 'this.actor.isDead()',
                    properties: {
                        textColor: '{this.deathColor()}'
                    }
                }
            ]
        }, // spriteName

        spriteHPGauge: {
            /* GUI Type */
            class: 'GUIGauge',

            /* Position */
            x: 0,
            y: 100,

            /* Color */
            tone: [0,0,0,0],

            /* Basic Properties */
            width:  140,
            height: 6,

            rate: 'this.actor.hpRate()',

            color1: '{this.hpGaugeColor1()}',
            color2: '{this.hpGaugeColor2()}',

            backColor:    '#000000',
            outlineColor: 'rgba(0,0,0,0.5)',

            direction: 'horizontal',

            /* Conditional Properties */
            conditional: [

            ]
        }, // spriteHPGauge

        spriteHPNumber: {
            /* GUI Type */
            class: 'GUIText',

            /* Position */
            x: 0,
            y: 72,

            /* Color */
            tone: [0,0,0,0],

            /* Basic Properties */
            text: 'HP: {this.actor.hp} / {this.actor.mhp}',

            fontFace: 'GameFont',
            fontSize: '16',

            textColor: '#ffffff',
            outlineColor: 'rgba(0,0,0,0.5)',

            /* Conditional Properties */
            conditional: [

            ]
        }, // spriteHPNumber

        spriteMPGauge: {
            /* GUI Type */
            class: 'GUIGauge',

            /* Position */
            x: 0,
            y: 136,

            /* Color */
            tone: [0,0,0,0],

            /* Basic Properties */
            width:  140,
            height: 6,

            rate: 'this.actor.mpRate()',

            color1: '{this.mpGaugeColor1()}',
            color2: '{this.mpGaugeColor2()}',

            backColor:    '#000000',
            outlineColor: 'rgba(0,0,0,0.5)',

            direction: 'horizontal',

            /* Conditional Properties */
            conditional: [

            ]
        }, // spriteHPGauge

        spriteMPNumber: {
            /* GUI Type */
            class: 'GUIText',

            /* Position */
            x: 0,
            y: 108,

            /* Color */
            tone: [0,0,0,0],

            /* Basic Properties */
            text: 'MP: {this.actor.mp} / {this.actor.mmp}',

            fontFace: 'GameFont',
            fontSize: '16',

            textColor: '#ffffff',
            outlineColor: 'rgba(0,0,0,0.5)',

            /* Conditional Properties */
            conditional: [

            ]
        } // spriteMPNumber
    };

    LunaEngine.Battle.Config.HUD = HUD;
    LunaEngine.Battle.Config.GUISprites = GUISprites;
}());
