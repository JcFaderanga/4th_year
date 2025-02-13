const currentHours = [8, 8, 8.30, 4];
const OJTHours = 500;

const currentToMinutes = currentHours.map((hour) => {
    if (hour % 1 !== 0) {
        const [hrs, mins] = hour.toString().split('.').map(Number);
        return (hrs * 60) + (mins * 10); // 0.30 means 30 minutes
    }
    return hour * 60;
});

const totalMinutes = currentToMinutes.reduce((acc, curr) => acc + curr, 0); 
const OJTHoursToMinutes = OJTHours * 60;

const minutesLeft = OJTHoursToMinutes - totalMinutes;
const hoursLeft = Math.floor(minutesLeft / 60);
const remainingMinutes = minutesLeft % 60;

const daysLeft = Math.floor(hoursLeft / 8);
const remainingHours = hoursLeft % 8;

const today = new Date();
let endDate = new Date(today);
let daysToAdd = daysLeft;
while (daysToAdd > 0) {
    endDate.setDate(endDate.getDate() + 1);
    if (endDate.getDay() !== 0 && endDate.getDay() !== 6) { // Skip Sundays and Saturdays
        daysToAdd--;
    }
}

const formattedEndDate = endDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

console.log(`${daysLeft} days ${remainingHours} hrs ${remainingMinutes} mins, expected end date ${formattedEndDate}`);



