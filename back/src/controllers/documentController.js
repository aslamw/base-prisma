let documents = []; // Simulação de dados em memória

exports.createDocument = (req, res) => {
  const { name, status, userId } = req.body;
  const newDocument = { id: documents.length + 1, name, status, userId };
  documents.push(newDocument);
  res.status(201).json(newDocument);
};

exports.getDocuments = (req, res) => {
  res.json(documents);
};

exports.getDocumentById = (req, res) => {
  const document = documents.find(d => d.id === parseInt(req.params.id));
  if (!document) return res.status(404).json({ message: 'Document not found' });
  res.json(document);
};

exports.getDocumentByUserId = (req, res) => {
  const document = documents.find(d => d.userId === parseInt(req.params.userId));
  if (!document) return res.status(404).json("none");
  res.json(document);
};

exports.updateDocument = (req, res) => {
  const document = documents.find(d => d.id === parseInt(req.params.id));
  if (!document) return res.status(404).json({ message: 'Document not found' });

  const { name, status } = req.body;
  document.name = name;
  document.status = status;

  res.json(document);
};

exports.deleteDocument = (req, res) => {
  documents = documents.filter(d => d.id !== parseInt(req.params.id));
  res.status(204).send();
};
