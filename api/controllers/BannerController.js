/**
 * BannerController
 *
 * @description :: Server-side logic for managing Banners
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = {
    saveData: function(req, res) {
        if (req.body) {
            Banner.saveData(req.body, function(err, respo) {
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
    getAll: function(req, res) {
        if (req.body) {
            Banner.getAll(req.body, function(err, respo) {
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
    getAllEnabledBanner: function(req, res) {
        if (req.body) {
            Banner.getAllEnabledBanner(req.body, function(err, respo) {
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
            if (req.body._id && req.body._id !== "") {
                Banner.deleteData(req.body, function(err, respo) {
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
            if (req.body._id && req.body._id !== "") {
                Banner.getOne(req.body, function(err, respo) {
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
    findForDrop: function(req, res) {
        if (req.body) {
            if (req.body.firstcategory && Array.isArray(req.body.firstcategory)) {
                Banner.findForDrop(req.body, function(err, respo) {
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
                    response: "Please provide parameters"
                });
            }
        } else {
            res.json({
                status: false,
                response: "Please provide parameters"
            });
        }
    }
};
