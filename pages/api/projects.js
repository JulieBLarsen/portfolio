const projects = [
  { id: 1, title: 'test 1' },
  { id: 2, title: 'test 2' },
  { id: 3, title: 'test 3' },
];

export default function handler(req, res) {
  res.status(200).json(projects);
}
