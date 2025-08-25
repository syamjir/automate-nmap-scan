"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var child_process_1 = require("child_process");
var fs_1 = require("fs");
var promises_1 = require("fs/promises");
var target = process.argv[2] || "scanme.nmap.org";
var command = "nmap -sV -T4 ".concat(target);
// 🔧 Sanitize filename
var fileName = "".concat(target.replace(/[^\w.-]/g, "_"), "_").concat(Date.now(), ".txt");
var outputPath = "./Results/".concat(fileName);
function checkNmapInstalledAndRun() {
    return __awaiter(this, void 0, void 0, function () {
        var _this = this;
        return __generator(this, function (_a) {
            (0, child_process_1.exec)("which nmap", function (error, stdout) { return __awaiter(_this, void 0, void 0, function () {
                var _this = this;
                return __generator(this, function (_a) {
                    if (error || !stdout) {
                        console.error("❌ Nmap is not installed. Please install it first.");
                        process.exit(1);
                    }
                    console.log("✅ Nmap is installed. Running scan...");
                    console.log("Scanning ".concat(target, " Progress...\n"));
                    // ✅ Run the actual scan
                    (0, child_process_1.exec)(command, function (scanError, stdout, stderr) { return __awaiter(_this, void 0, void 0, function () {
                        var fsErr_1;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    if (scanError) {
                                        console.error("\u274C Error: ".concat(scanError.message));
                                        return [2 /*return*/];
                                    }
                                    if (stderr) {
                                        console.error("\u26A0\uFE0F Stderr: ".concat(stderr));
                                        return [2 /*return*/];
                                    }
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, 3, , 4]);
                                    // Create Results folder if it doesn't exist
                                    return [4 /*yield*/, (0, promises_1.mkdir)("./Results", { recursive: true })];
                                case 2:
                                    // Create Results folder if it doesn't exist
                                    _a.sent();
                                    // Save the scan output
                                    (0, fs_1.writeFile)(outputPath, stdout, function (writeErr) {
                                        if (writeErr) {
                                            console.error("\u274C Failed to save file: ".concat(writeErr.message));
                                        }
                                        else {
                                            console.log("✅ Scan completed and saved successfully!");
                                            console.log("\uD83D\uDCC1 File: ".concat(outputPath));
                                        }
                                    });
                                    return [3 /*break*/, 4];
                                case 3:
                                    fsErr_1 = _a.sent();
                                    console.error("\u274C Filesystem error: ".concat(fsErr_1.message));
                                    return [3 /*break*/, 4];
                                case 4: return [2 /*return*/];
                            }
                        });
                    }); });
                    return [2 /*return*/];
                });
            }); });
            return [2 /*return*/];
        });
    });
}
// 🚀 Start the process
checkNmapInstalledAndRun();
