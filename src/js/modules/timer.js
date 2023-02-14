const timer = (id, deadline) => {
	const addZero = (num) => {
		if (num <= 9) {
			return "0" + num;
		} else {
			return num;
		}
	};
	const getTimeRemaining = (endTime) => {
		const t = Date.parse(endTime) - Date.parse(new Date()),
			seconds = Math.floor((t / 1000) % 60),
			minutes = Math.floor((t / 1000 / 60) % 60),
			hours = Math.floor((t / (1000 * 60 * 60)) % 24),
			days = Math.floor(t / (1000 * 60 * 24));

		return {
			total: t,
			days: days,
			hours: hours,
			minutes: minutes,
			seconds: seconds,
		};
	};

	const setClock = (selector, endtime) => {
		const timer = document.querySelector(selector),
			days = timer.querySelector("#days"),
			hours = timer.querySelector("#hours"),
			minutes = timer.querySelector("#minutes"),
			seconds = timer.querySelector("#seconds"),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function updateClock() {
			const t = getTimeRemaining(endtime);

			days.innerHTML = addZero(t.days);
			hours.innerHTML = addZero(t.hours);
			minutes.innerHTML = addZero(t.minutes);
			seconds.innerHTML = addZero(t.seconds);

			if (t.total <= 0) {
				days.innerHTML = "00";
				hours.innerHTML = "00";
				minutes.innerHTML = "00";
				seconds.innerHTML = "00";

				clearInterval(timeInterval);
			}
		}
	};
	setClock(id, deadline);
};

export default timer;
