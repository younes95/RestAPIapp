/**
 *
 * The MIT License (MIT)
 *
 * http://block0.org
 *
 * Copyright (c) 2016-present Jollen
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 */

'use strict';

// RPC protocols
var RPCMessage = {
    FIND_SUCCESSOR:     0,
    FOUND_SUCCESSOR:    1,
    NEW_NODE:           2,
    MESSAGE:            5,
    SYNCHRONISATION:    6,
    RECEIVEBLOCKCHAIN:  7,
    RECEIVETRANSACTION: 8,
    REQUESTTOKEN :		9,
    VALIDATION	:		10,
    REQUESTACCESS:		11,
    RESPONSEVALIDATIONTRANSACTION: 12,
    INSERTRANSACTION :  13,
    UPDATEACCESSRIGHTS : 14,
    SIGNEDMESSAGE : 15,
    ELECTEDMINER : 16,
};

/*
 * Export 'Node' class
 */
if (typeof(module) != "undefined" && typeof(exports) != "undefined")
  module.exports = RPCMessage;
