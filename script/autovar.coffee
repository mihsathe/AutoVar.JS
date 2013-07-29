class AutoVar
	url: ""
	paused: null
	val: null
	bind: []
	lastUpdated: null
	handle: null

	constructor: (@url, @val, bind)->
		@url = @nocache()
		@bind = bind unless not bind? or not bind.length?
		@run()

	nocache: ()->
		return @url + "&" + Math.random() unless "?" not in @url
		return @url + "?" + Math.random()

	bind: (sel)->
		# pass on the jQuery selectors
		bind.push sel

	unbind: ()->
		@bind = []

	get: ()->
		return @val

	updateBindings: ()->
		for binding in @bind
			$(binding).html(@val)

	update: ()->
		$.ajax
			url: @url
			success: ((self)-> 
				(res)->
					lastUpdated = new Date()
					self.val = res
					self.updateBindings.call(self)) this

	pause: ()->
		@paused = true

	unpause: ()->
		@paused = false
		run()

	run: ()->
		if not @paused
			@handle = setInterval (
				(self)-> 
					()->
						
						self.update.call(self) unless self.paused
					)(this), 1000
		return

this.AutoVar = AutoVar