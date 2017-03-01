/**
 * AdminController
 *
 * @description :: Server-side logic for managing Admins
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    saveData: function(req, res) {
        if (req.body) {
            Admin.saveData(req.body, function(err, respo) {
                if (err) {
                    res.json({
                        status: false,
                        response: err
                    });
                } else {
                    res.json({
                        status: true,
                        response: respo
                    });
                }
            });
        } else {
            res.json({
                status: false,
                response: "Invalid call"
            });
        }
    },
    getall: function(req, res) {
        if (req.body) {
            Admin.getAll(req.body, function(err, respo) {
                if (err) {
                    res.json({
                        status: false,
                        response: err
                    });
                } else {
                    res.json({
                        status: true,
                        response: respo
                    });
                }
            });
        } else {
            res.json({
                status: false,
                response: "Invalid call"
            });
        }
    },
    deleteData: function(req, res) {
        if (req.body) {
            if (req.body._id && req.body._id != "") {
                Admin.deleteData(req.body, function(err, respo) {
                    if (err) {
                        res.json({
                            status: false,
                            response: err
                        });
                    } else {
                        res.json({
                            status: true,
                            response: respo
                        });
                    }
                });
            } else {
                res.json({
                    status: false,
                    response: "Invalid Id"
                });
            }
        } else {
            res.json({
                status: false,
                response: "Invalid call"
            });
        }
    },
    getOne: function(req, res) {
        if (req.body) {
            if (req.body._id && req.body._id != "") {
                Admin.getOne(req.body, function(err, respo) {
                    if (err) {
                        res.json({
                            status: false,
                            response: err
                        });
                    } else {
                        res.json({
                            status: true,
                            response: respo
                        });
                    }
                });
            } else {
                res.json({
                    status: false,
                    response: "Invalid Id"
                });
            }
        } else {
            res.json({
                status: false,
                response: "Invalid call"
            });
        }
    },
    login: function(req, res) {
        if (req.body) {
            if (req.body.email && req.body.password) {
                Admin.login(req.body, function(err, respo) {
                    if (err) {
                        res.json({
                            status: false,
                            response: err
                        });
                    } else {
                        res.json({
                            status: true,
                            response: respo
                        });
                    }
                });
            } else {
                res.json({
                    status: false,
                    response: "Invalid params"
                });
            }
        } else {
            res.json({
                status: false,
                response: "Invalid call"
            });
        }
    }
};
