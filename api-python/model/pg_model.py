import os
import psycopg2
from psycopg2.extras import RealDictCursor

class PgModel:
    def get_information(self, title):
        with PgDatabase() as db:
            db.execute("SELECT content FROM informations WHERE title = %s", (title,))
            result = db.fetchone()
        return result
    
    def update_information(self, title, content):
        with PgDatabase() as db:
            db.execute("UPDATE informations SET content = %s WHERE title = %s", 
                    (content, title))

    def delete_information(self, title):
        with PgDatabase() as db:
            db.execute("DELETE FROM informations WHERE title = %s", 
                    (title,))

    def get_portfolios(self):
        with PgDatabase() as db:
            db.execute('SELECT id, title, content, github_link AS "githubLink", tech_stack AS "techStack" FROM portfolios')
            result = db.fetchall()

    def add_participate(self, title, content):
        with PgDatabase() as db:
            db.execute("""
                INSERT INTO participates (title, content)
                VALUES (%s, %s);
                    """, (title, content))

class PgDatabase:
    def __init__(self):
        self._conn = psycopg2.connect(
            host="localhost",
            database=os.environ['DB_DATABASE'],
            user=os.environ['DB_USERNAME'],
            password=os.environ['DB_PASSWORD']
            )
        self._cursor = self._conn.cursor(cursor_factory=RealDictCursor)

    def __enter__(self):
        return self

    def __exit__(self, exc_type, exc_val, exc_tb):
        self.close()

    @property
    def connection(self):
        return self._conn

    @property
    def cursor(self):
        return self._cursor

    def commit(self):
        self.connection.commit()

    def close(self, commit=True):
        if commit:
            self.commit()
        self.connection.close()

    def execute(self, sql, params=None):
        self.cursor.execute(sql, params or ())

    def fetchall(self):
        return self.cursor.fetchall()

    def fetchone(self):
        return self.cursor.fetchone()

    def query(self, sql, params=None):
        self.cursor.execute(sql, params or ())
        return self.fetchall()

