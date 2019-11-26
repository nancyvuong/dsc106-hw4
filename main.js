Highcharts.chart('sharedGrid', {
    chart: {
        type: 'timeline'
    },
    xAxis: {
        visible: false
    },
    yAxis: {
        visible: false
    },
    title: {
        text: "Timeline of Dicaprio's Oscar Nominations"
    },
    subtitle: {
        text: "Until Finally He Won One"
    },
    colors: [
        '#4185F3',
        '#427CDD',
        '#406AB2',
        '#3E5A8E',
        '#3B4A68',
        '#363C46'
    ],
    series: [{
        dataLabels: {
            allowOverlap: true,
            format: '<span style="font-weight: bold;" > ' + 
            '{point.x: %Y}</span><br/>{point.label}'
          },
        data: [{
            x: Date.UTC(1994),
            name: "1998",
            description: "What's Eating Gilbert Grape",
            label: 'Nominated for Best Supporting Actor'
        }, {
            x: Date.UTC(2005),
            name: '2005',
            description: 'The Aviator',
            label: 'Nominated for Best Actor'
        }, {
            x: Date.UTC(2007),
            name: '2007',
            description: 'Blood Diamond, The Departed',
            label: 'Nominated for Best Actor'
        }, {
            x: Date.UTC(2014),
            name: '2014',
            label: 'Nominated for Best Actor and Best Picture',
            description: 'The Wolf of Wallstreet'
        }, {
            x: Date.UTC(2016),
            name: 2016,
            label: 'Won Best Actor',
            description: 'The Revenant'
        }]
    }]
});

Highcharts.chart('sharedGrid1', {
    series: [{
        type: "treemap",
        layoutAlgorithm: 'stripes',
        alternateStartingDirection: true,
        levels: [{
            level: 1,
            layoutAlgorithm: 'sliceAndDice',
            dataLabels: {
                enabled: true,
                align: 'left',
                verticalAlign: 'top',
                style: {
                    fontSize: '14px',
                    fontWeight: 'bold'
                }
            }
        }],
        data: [{
            id: 'A',
            name: 'Alejandro G. Inarritu',
            color: '#EC2500'
        }, {
            id: 'B',
            name: 'Baz Luhrmann',
            color: '#ECE100'
        }, {
            id: 'C',
            name: 'Martin Scorsese',
            color: '#EC9800'
        },
         {
            name: 'The Revenant',
            parent: 'A',
            value: 18
        }, {
            name: 'Romeo + Juliet',
            parent: 'B',
            value: 2
        }, {
            name: 'The Great Gatsby',
            parent: 'B',
            value: 3
        }, {
            name: 'The Aviator',
            parent: 'C',
            value: 3
        }, {
            name: 'The Departed',
            parent: 'C',
            value: 5
        }, {
            name: 'Shutter Island',
            parent: 'C',
            value: 1
        }, {
            name: 'The Wolf of Wallstreet',
            parent: 'C',
            value: 3
        }]
    }],
    title: {
        text: 'Proportions of Awards Won'
    },
    subtitle: {
        text: "Divided by Directors and Films"
    }
});

var text = 'science fiction comedy horror adaptation memoir ' +
'drama western biographical crime drama erotic drama romance crime ' 
+'tragedy drama epic romance disaster action drama ' +
'comedy drama drama thriller biographical crime epic period drama '+
'epic biographical drama crime drama political war thriller documentary ' +
'action thriller romance drama noir psychological thriller documentary ' +
'sci-fi action biographical drama western romance drama biographical comedy ' +
'survival drama western documentary documentary comedy drama ';

var lines = text.split(/[,\. ]+/g),
    data = Highcharts.reduce(lines, function (arr, word) {
        var obj = Highcharts.find(arr, function (obj) {
            return obj.name === word;
        });
        if (obj) {
            obj.weight += 1;
        } else {
            obj = {
                name: word,
                weight: 1
            };
            arr.push(obj);
        }
        return arr;
    }, []);

Highcharts.chart('sharedGrid2', {
    series: [{
        type: 'wordcloud',
        data: data,
        name: 'Occurrences'
    }],
    title: {
        text: 'Genre of Films Dicaprio Starred In'
    }
});