const presenter_list = [
  {
    event: { date: '2019-04-06' },
    member: { row_id: 366, first_name: 'Eugene', last_name: 'Bondari' },
    presentation: { title: 'Tree Iteration', is_active: true, order: 0 }
  },
  {
    event: { date: '2019-04-06' },
    member: { row_id: 304, first_name: 'Andrew', last_name: 'Yasso' },
    presentation: { title: 'Before & After Photos', is_active: true, order: 1 },
    technologies: [
      { id: 1, name: 'JavaScript', popularity: 60 },
      { id: 66, name: 'Node.js', popularity: 50 },
      { id: 118, name: 'Chrome extension', popularity: 40 }
    ]
  }
  // {
  //   event: { date: '2019-04-06' },
  //   member: { row_id: 433, first_name: 'Edinardo', last_name: 'Potrich' },
  //   presentation: {
  //     title: 'PowerShift thermostat integration with Google Actions',
  //     is_active: true,
  //     order: 2
  //   },
  //   technologies: [
  //     { id: 66, name: 'Node.js', popularity: 50 },
  //     { id: 34, name: 'Firebase', popularity: 50 }
  //   ]
  // },
  // {
  //   event: { date: '2019-04-06' },
  //   member: { row_id: 321, first_name: 'Nathan', last_name: 'Gelman' },
  //   presentation: { title: 'Emoji Grid', is_active: true, order: 3 },
  //   technologies: [{ id: 91, name: 'Swift', popularity: 50 }]
  // },
  // {
  //   event: { date: '2019-04-06' },
  //   member: { row_id: 383, first_name: 'Kyle', last_name: 'Elmore' },
  //   presentation: {
  //     title: 'A JavaScript Logging Module',
  //     is_active: true,
  //     order: 4
  //   },
  //   technologies: [
  //     { id: 1, name: 'JavaScript', popularity: 60 },
  //     { id: 66, name: 'Node.js', popularity: 50 },
  //     { id: 94, name: 'TypeScript', popularity: 50 },
  //     { id: 64, name: 'MySQL', popularity: 50 }
  //   ]
  // },
  // {
  //   event: { date: '2019-04-06' },
  //   member: { row_id: 426, first_name: 'Tim', last_name: 'Osterbuhr' },
  //   presentation: {
  //     title: 'Reviving Crayon Crunch a Personalized Kids Book',
  //     is_active: true,
  //     order: 5
  //   },
  //   technologies: [
  //     { id: 71, name: 'PHP', popularity: 50 },
  //     { id: 75, name: 'Python', popularity: 50 }
  //   ]
  // },
  // {
  //   event: { date: '2019-04-06' },
  //   member: { row_id: 372, first_name: 'Lorenz', last_name: 'Madarang' },
  //   presentation: {
  //     title: 'Teaching a Machine to Appreciate Adele and Bob Marley',
  //     is_active: true,
  //     order: 6
  //   },
  //   technologies: [{ id: 75, name: 'Python', popularity: 50 }]
  // },
  // {
  //   event: { date: '2019-04-06' },
  //   member: { row_id: 195, first_name: 'Sunny', last_name: 'Clark' },
  //   presentation: { title: 'The Platform', is_active: true, order: 7 },
  //   technologies: [
  //     { id: 66, name: 'Node.js', popularity: 50 },
  //     { id: 63, name: 'MongoDB', popularity: 50 }
  //   ]
  // },
  // {
  //   event: { date: '2019-04-06' },
  //   member: { row_id: 286, first_name: 'Carlos', last_name: 'Alfaro' },
  //   presentation: { title: 'Learning by doing', is_active: true, order: 8 },
  //   technologies: [{ id: 66, name: 'Node.js', popularity: 50 }]
  // },
  // {
  //   event: { date: '2019-04-06' },
  //   member: { row_id: 292, first_name: 'Tyler', last_name: 'Hanevold' },
  //   presentation: {
  //     title: 'Untitled project, April 6th, 2019',
  //     is_active: true,
  //     order: 9
  //   },
  //   technologies: [{ id: 71, name: 'PHP', popularity: 50 }]
  // },
  // {
  //   event: { date: '2019-04-06' },
  //   member: { row_id: 142, first_name: 'Mike', last_name: 'Ziethlow' },
  //   presentation: {
  //     title: 'A open source list of all programming technologies',
  //     is_active: true,
  //     order: 10
  //   },
  //   technologies: [
  //     { id: 66, name: 'Node.js', popularity: 50 },
  //     { id: 1, name: 'JavaScript', popularity: 60 },
  //     { id: 79, name: 'React', popularity: 50 },
  //     { id: 47, name: 'HTML', popularity: 50 },
  //     { id: 26, name: 'CSS', popularity: 50 }
  //   ]
  // },
  // {
  //   event: { date: '2019-04-06' },
  //   member: { row_id: 343, first_name: 'Andy', last_name: 'Goldberg' },
  //   presentation: {
  //     title: 'Reveal.js - a Powerpoint alternative',
  //     is_active: true,
  //     order: 11
  //   }
  // }
];

module.exports = presenter_list;
