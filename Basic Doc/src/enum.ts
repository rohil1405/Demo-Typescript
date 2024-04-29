enum day {
    Sun, Mon, Tue, Wed, Thu, Fri, Sat
}

const count: day = day.Mon;

if(count===day.Mon) {
    console.log('Monday')
} else {
    console.log('Not a Monday');
}

export {}