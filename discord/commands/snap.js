module.exports.run = async (CommandStruct, PermStruct) => {
    let msg = CommandStruct.message;
    var member = msg.mentions.members.first()
    member = member ? member : msg.member
    const snapped = (member.user.id[0] % 2) === 0;
    const snappedMessage = snapped
                            ? `${member.user.username} was **SNAPPED**`
                            : `${member.user.username} was **SPARED**`;
    msg.reply(snappedMessage)
}

module.exports.helpText = `Snaps or spares the mentioned user`

module.exports.Category = `Fun`

module.exports.RequiredPermissions = []