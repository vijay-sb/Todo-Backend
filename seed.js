// seed.js
import pg from 'pg';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.production' });

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const seedTodos = async () => {
  try {
    const todos = [
      { title: 'Learn Bruno' },
      { title: 'Deploy to EC2' },
      { title: 'Write migration script' },
    ];

    for (const todo of todos) {
      await pool.query(
        'INSERT INTO todos (title, completed) VALUES ($1, $2)',
        [todo.title, false]
      );
    }

    console.log('✅ Seed data inserted successfully.');
    await pool.end();
  } catch (error) {
    console.error('❌ Error seeding data:', error);
    process.exit(1);
  }
};

seedTodos();

