var ShadowGDT = {};

(function() {
	ShadowGDT.path = GDT.getRelativePath();

	ShadowGDT.getSrcFile = function(name) {
		return ShadowGDT.path + "/" + name;
	}

	ShadowGDT.getCharacterUnderCursor = function() {
		var company = GameManager.company;
		return 1 < company.currentLevel ? UI.getCharUnderCursor() : company.staff[0];;
	}

	Research.getName = function(id) {
		for (var r in Research) {
			if (Research[r].id === id) {
				return Research[r].name;
			}
		}
	};

	Training.isTraining = function(id) {
		for (var t in Training) {
			if (t === id) {
				return true;
			}
		}
		return false;
	};

	CharacterOverlay.prototype.sayStatic = sayStatic = function(a, x, y) {
		var d = 0;
		var f = "black";
		var c = 800;
		var g = new createjs.Container;
		g.x = x;
		g.y = y;
		a = new createjs.Text(a, "18pt Arial", f);
		a.textBaseline = "top";
		f = a.getMeasuredWidth();
		var k = a.getMeasuredLineHeight(),
			l = new createjs.Shape,
			h = l.graphics;
		h.beginFill(createjs.Graphics.getRGB(255, 255, 255, 0.8));
		h.beginStroke("black");
		h.setStrokeStyle(1);
		h.drawRoundRect(-4, -4, f + 8, k + 8, 5);
		h.closePath();
		g.addChild(l);
		g.addChild(a);
		g.alpha = 1;
		this.addChild(g);
		var overlay = this;
		createjs.Tween.get(g)
			.wait(10)
			.call(function() {
				overlay.removeChild(g);
			});
	};

})();