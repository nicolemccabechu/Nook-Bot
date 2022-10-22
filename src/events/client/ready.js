module.exports = {
  name: "ready",
  once: true,
  async execute(client) {
    setInterval(client.pickPresence, 10 * 1000); // milliseconds
    console.log(`${client.user.tag} has logged into Discord.`);
  },
};
