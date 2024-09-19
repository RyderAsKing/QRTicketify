<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Event Invitation</title>
</head>

<body style="margin: 24px; padding: 0; font-family: Arial, sans-serif; background-color: #f7f7f7; color: #333333;">
    <table class="wrapper" width="100%" cellpadding="0" cellspacing="0"
        style="width: 100%; table-layout: fixed; background-color: #f7f7f7; padding-bottom: 40px;">
        <tr>
            <td>
                <table class="container" width="600" cellpadding="0" cellspacing="0"
                    style="max-width: 600px; margin: 0 auto; background-color: #ffffff; overflow: hidden; ">
                    <!-- Email Header -->
                    <tr>
                        <td class="header"
                            style="background-color: #edf2f7; padding: 20px; text-align: center; color: #3d4852; font-size: 24px;">
                            You're Invited to {{ $ticket->event->name }}
                        </td>
                    </tr>

                    <!-- Email Body -->
                    <tr>
                        <td class="content" style="padding: 20px; font-size: 16px; line-height: 1.5; color: #333333;">
                            <p style="margin: 0 0 20px 0;">Dear Guest,</p>
                            <p style="margin: 0 0 20px 0;">We are excited to invite you to
                                <strong>{{ $ticket->event->name }}</strong>.
                            </p>
                            <p style="margin: 0 0 20px 0;">{{ $ticket->event->description }}</p>

                            <div class="button-container" style="text-align: center; margin-top: 20px;">
                                <a href="{{ route('ticket.show', $ticket->ticket_string) }}" class="button"
                                    target="_blank"
                                    style="background-color: #2d3748; color: #ffffff; padding: 10px 20px; text-decoration: none; font-size: 16px; ">
                                    Download Event
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- Email Footer -->
                    <tr>
                        <td class="footer" style="padding: 10px; text-align: center; font-size: 12px; color: #999999;">
                            &copy; {{ date('Y') }} {{ config('app.name') }}. All rights reserved.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
