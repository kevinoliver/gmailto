console.log("gmailto: loaded");

/**
 * Parses "mailto:" into the relevant components.
 *
 * Returns an object literal:
 * {
 *     tos: "email@example.com, email2@example.com",
 *     ccs: "email@example.com, email2@example.com",
 *     bccs: null,
 *     subject: "string or null",
 *     body: "string or null"
 * }
 */
function parseMailto(href) {
    const url = new URL(href);
    return {
        to: url.pathname,
        cc: url.searchParams.get("cc"),
        bcc: url.searchParams.get("bcc"),
        subject: url.searchParams.get("subject"),
        body: url.searchParams.get("body")
    };
}

function toGmailUrl(mailto) {
    // For info on GMail's URL structure for composing emails:
    // https://stackoverflow.com/questions/6988355/open-gmail-on-mailto-action
    const url = new URL("https://mail.google.com/mail/");
    url.searchParams.append("fs", "1");
    url.searchParams.append("tf", "cm");
    
    if (mailto.to) {
        url.searchParams.append("to", mailto.to);
    }
    if (mailto.cc) {
        url.searchParams.append("cc", mailto.cc);
    }
    if (mailto.bcc) {
        url.searchParams.append("bcc", mailto.bcc);
    }
    if (mailto.subject) {
        url.searchParams.append("su", mailto.subject);
    }
    if (mailto.body) {
        url.searchParams.append("body", mailto.body);
    }
    
    return url.href;
}

// todo: this should work with forms too, eg:
// <form method="POST" action="mailto: name@email.com" enctype="multipart/form-data">

window.addEventListener("click", function(event) {
    if (event.target.tagName !== "A") return;
    
    // See: https://stackoverflow.com/questions/29223502/how-to-get-href-of-anchor-when-the-event-target-is-htmlimageelement
    const href = event.target.closest("a")?.getAttribute("href");
    if (!href || !href.startsWith("mailto:")) return;

    // stop the click from triggering the email link as we are taking over that action
    event.preventDefault();
    
    const parsedMailto = parseMailto(href);
    const gmailUrl = toGmailUrl(parsedMailto);
    window.open(gmailUrl, "_blank");
});
