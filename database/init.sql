CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    time_started TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    parent_skill_id INT DEFAULT NULL
    FOREIGN KEY (parent_skill_id) REFERENCES skills(id)
);

CREATE TABLE experiences {
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    organization VARCHAR(255),
    skill_id INT,
    description TEXT,
    time_started TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    time_ended TIMESTAMP DEFAULT NULL
    FOREIGN KEY (skill_id) REFERENCES skills(id)
};

CREATE TABLE experience-skills-relation {
    id SERIAL PRIMARY KEY,
    experience_id INT,
    skill_id INT,
    FOREIGN KEY (experience_id) REFERENCES experiences(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
};

CREATE TABLE projects {
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    time_started TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    time_ended TIMESTAMP DEFAULT NULL
    FOREIGN KEY (skill_id) REFERENCES skills(id)
};

CREATE TABLE project-skills-relation {
    id SERIAL PRIMARY KEY,
    project_id INT,
    skill_id INT,
    FOREIGN KEY (project_id) REFERENCES projects(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
};

CREATE TABLE blogs{
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    category VARCHAR(255),
    time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
};

CREATE TABLE blog-skills-relation {
    id SERIAL PRIMARY KEY,
    blog_id INT,
    skill_id INT,
    FOREIGN KEY (blog_id) REFERENCES blogs(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
};

CREATE TABLE blog-experiences-relation {
    id SERIAL PRIMARY KEY,
    blog_id INT,
    experience_id INT,
    FOREIGN KEY (blog_id) REFERENCES blogs(id),
    FOREIGN KEY (experience_id) REFERENCES experiences(id)
};

CREATE TABLE blog-projects-relation {
    id SERIAL PRIMARY KEY,
    blog_id INT,
    project_id INT,
    FOREIGN KEY (blog_id) REFERENCES blogs(id),
    FOREIGN KEY (project_id) REFERENCES projects(id)
};

CREATE TABLE guides {
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    category VARCHAR(255),
    time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
};

CREATE TABLE guide-part {
    id SERIAL PRIMARY KEY,
    guide_id INT,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    part_number INT,
    time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    FOREIGN KEY (guide_id) REFERENCES guides(id)
};

CREATE TABLE guide-skills-relation {
    id SERIAL PRIMARY KEY,
    guide_id INT,
    skill_id INT,
    FOREIGN KEY (guide_id) REFERENCES guides(id),
    FOREIGN KEY (skill_id) REFERENCES skills(id)
};