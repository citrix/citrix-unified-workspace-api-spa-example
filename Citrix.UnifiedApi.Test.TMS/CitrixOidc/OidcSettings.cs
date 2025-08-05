// Copyright © 2025. Cloud Software Group, Inc. All Rights Reserved.

namespace Citrix.UnifiedApi.Test.TMS.CitrixOidc;

public record OidcSettings
{
    public string? Authority { get; set; } = "https://accounts.cloud.com/core/";

    public string? ClientId { get; set; }

    public string? ClientSecret { get; set; }

    public string? ApplicationId { get; set; }

    public string? CallbackPath { get; set; } = "/callback";

    public Boolean UsePkce { get; set; } = true;

    public Boolean UseOfflineAccess { get; set; } = true;
}