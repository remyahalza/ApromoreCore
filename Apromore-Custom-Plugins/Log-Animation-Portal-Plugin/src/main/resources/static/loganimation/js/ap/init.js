/*
 * #%L
 * This file is part of "Apromore Enterprise Edition".
 * %%
 * Copyright (C) 2019 - 2022 Apromore Pty Ltd. All Rights Reserved.
 * %%
 * NOTICE:  All information contained herein is, and remains the
 * property of Apromore Pty Ltd and its suppliers, if any.
 * The intellectual and technical concepts contained herein are
 * proprietary to Apromore Pty Ltd and its suppliers and may
 * be covered by U.S. and Foreign Patents, patents in process,
 * and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this
 * material is strictly forbidden unless prior written permission
 * is obtained from Apromore Pty Ltd.
 * #L%
 */
window.Apromore = window.Apromore || {};
if (!Apromore.CONFIG) {
    Apromore.CONFIG = {};
}
// Apromore.CONFIG.SERVER_HANDLER_ROOT_PREFIX = '../../' + '${arg.editor}';
Apromore.CONFIG.SERVER_HANDLER_ROOT_PREFIX = '/' + '${arg.editor}';