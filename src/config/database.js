module.exports = {
  dialect: 'postgres',
  host: '192.168.99.101',
  username: 'postgres',
  password: 'docker',
  database: 'meetapp',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
