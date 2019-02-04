module.exports = {
  port: process.env.PORT || 8888,
  db:{
    mongoAtlas: "mongodb://fugro_interview:fugro_interview@cluster0-shard-00-00-qfqqn.mongodb.net:27017,cluster0-shard-00-01-qfqqn.mongodb.net:27017,cluster0-shard-00-02-qfqqn.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"
  },
  auth:{
    jwtSecret: process.env.JWT_SECRET || "FugroInterview",
    jwtFindBy: process.env.JWT_FIND_BY || "ByFugroInterview"
    
  }
};
