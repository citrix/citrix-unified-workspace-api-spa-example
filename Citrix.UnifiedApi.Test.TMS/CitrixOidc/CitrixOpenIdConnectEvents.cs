// Copyright © 2023. Cloud Software Group, Inc. All Rights Reserved.

using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.IdentityModel.Protocols.OpenIdConnect;

namespace Citrix.UnifiedApi.Test.TMS.CitrixOidc;

/// <summary>
///     This handles adding additional values to the outgoing requests.
/// </summary>
public class CitrixOpenIdConnectEvents : OpenIdConnectEvents
{
    public override Task RedirectToIdentityProvider(RedirectContext context)
    {
        // Need to add the AcrValues to the outgoing request
        context.ProtocolMessage.AcrValues =
            context.Properties.GetParameter<string>(OpenIdConnectParameterNames.AcrValues);
        return Task.CompletedTask;
    }

    public override Task AuthorizationCodeReceived(AuthorizationCodeReceivedContext context)
    {
        if (context.TokenEndpointRequest == null)
        {
            return Task.CompletedTask;
        }

        return Task.CompletedTask;
    }
}