const db = require('../config/db');

exports.searchPolicy = async (req, res) => {
  const { keyword, category } = req.query;
  try {
    let query = 'SELECT p.*, q.question, q.answer FROM policy_item p LEFT JOIN qa_pair q ON p.policy_id = q.policy_id WHERE 1=1';
    const params = [];
    
    if (keyword) {
      params.push(`%${keyword}%`);
      query += ` AND (p.title LIKE $${params.length} OR p.keywords LIKE $${params.length} OR q.question LIKE $${params.length})`;
    }
    
    if (category) {
      params.push(category);
      query += ` AND p.category = $${params.length}`;
    }

    const { rows } = await db.query(query, params);
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.maintainKnowledge = async (req, res) => {
  const { title, category, keywords, content, status } = req.body;
  try {
    const policyId = `POL-${Date.now()}`;
    const { rows } = await db.query(
      'INSERT INTO policy_item (policy_id, title, category, keywords, content, status) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [policyId, title, category, keywords, content, status || 'active']
    );
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
