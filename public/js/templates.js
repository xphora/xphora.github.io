!function(){var l=Handlebars.template,n=Handlebars.templates=Handlebars.templates||{};n.projectDetail=l({1:function(l,n,a,e,r){var i;return"			<h2 class='project-detail-title'>"+l.escapeExpression(l.lambda(null!=(i=null!=n?n.project:n)?i.title:i,n))+"</h2>\n"},3:function(l,n,a,e,r){var i;return"			<p class='project-detail-description'>"+l.escapeExpression(l.lambda(null!=(i=null!=n?n.project:n)?i.description:i,n))+"</p>\n"},5:function(l,n,a,e,r){var i;return"			<h3 class='project-detail-subheader'>Project Link</h3>\n"+(null!=(i=(a.ifEqual||n&&n.ifEqual||a.helperMissing).call(null!=n?n:{},null!=(i=null!=(i=null!=n?n.project:n)?i.link:i)?i.status:i,"active",{name:"ifEqual",hash:{},fn:l.program(6,r,0),inverse:l.program(8,r,0),data:r}))?i:"")},6:function(l,n,a,e,r){var i,t=l.lambda,s=l.escapeExpression;return"			<p><a href='"+s(t(null!=(i=null!=(i=null!=n?n.project:n)?i.link:i)?i.link:i,n))+"' target=\"_blank\" class='project-detail-link'>"+s(t(null!=(i=null!=(i=null!=n?n.project:n)?i.link:i)?i.display:i,n))+"</a></p>\n"},8:function(l,n,a,e,r){var i;return"			<p class='strikethrough'>"+l.escapeExpression(l.lambda(null!=(i=null!=(i=null!=n?n.project:n)?i.link:i)?i.link:i,n))+"</p>\n"},10:function(l,n,a,e,r){var i;return"			<h3 class='project-detail-subheader'>Built with</h3>\n			<ul class='list-inline project-detail-role'>\n"+(null!=(i=a.each.call(null!=n?n:{},null!=(i=null!=n?n.project:n)?i.builtWith:i,{name:"each",hash:{},fn:l.program(11,r,0),inverse:l.noop,data:r}))?i:"")+"			</ul>\n"},11:function(l,n,a,e,r){return"					<li>"+l.escapeExpression(l.lambda(n,n))+"</li>\n"},13:function(l,n,a,e,r){var i;return"			<h3 class='project-detail-subheader'>Role</h3>\n			<ul class='list-inline project-detail-role'>\n"+(null!=(i=a.each.call(null!=n?n:{},null!=(i=null!=n?n.project:n)?i.role:i,{name:"each",hash:{},fn:l.program(11,r,0),inverse:l.noop,data:r}))?i:"")+"			</ul>\n"},15:function(l,n,a,e,r){var i;return"			<h3 class='project-detail-subheader'>Press</h3>\n			<ul class='list-inline'>\n"+(null!=(i=a.each.call(null!=n?n:{},null!=(i=null!=n?n.project:n)?i.press:i,{name:"each",hash:{},fn:l.program(16,r,0),inverse:l.noop,data:r}))?i:"")+"			</ul>\n"},16:function(l,n,a,e,r){var i,t=null!=n?n:{},s=a.helperMissing,o="function",c=l.escapeExpression;return"				<li><a href='"+c((i=null!=(i=a.link||(null!=n?n.link:n))?i:s,typeof i===o?i.call(t,{name:"link",hash:{},data:r}):i))+'\' target="_blank">'+c((i=null!=(i=a.publication||(null!=n?n.publication:n))?i:s,typeof i===o?i.call(t,{name:"publication",hash:{},data:r}):i))+"</a></li> |\n"},18:function(l,n,a,e,r){var i,t=null!=n?n:{};return"		<div id='carousel-project-detail' class='carousel slide'>\n			<div class='carousel-inner' role='listbox'>\n"+(null!=(i=a.each.call(t,null!=(i=null!=n?n.project:n)?i.media:i,{name:"each",hash:{},fn:l.program(19,r,0),inverse:l.noop,data:r}))?i:"")+"			</div> <!-- end of carousel inner -->\n"+(null!=(i=(a.ifMoreThanOne||n&&n.ifMoreThanOne||a.helperMissing).call(t,null!=(i=null!=n?n.project:n)?i.media:i,{name:"ifMoreThanOne",hash:{},fn:l.program(28,r,0),inverse:l.noop,data:r}))?i:"")+"		</div><!-- end of carousel project detail -->\n"},19:function(l,n,a,e,r){var i,t,s=null!=n?n:{},o=a.helperMissing;return(null!=(i=(a.ifEqual||n&&n.ifEqual||o).call(s,r&&r.index,0,{name:"ifEqual",hash:{},fn:l.program(20,r,0),inverse:l.program(22,r,0),data:r}))?i:"")+"\n"+(null!=(i=(a.ifEqual||n&&n.ifEqual||o).call(s,null!=n?n.type:n,"image",{name:"ifEqual",hash:{},fn:l.program(24,r,0),inverse:l.noop,data:r}))?i:"")+(null!=(i=(a.ifEqual||n&&n.ifEqual||o).call(s,null!=n?n.type:n,"video",{name:"ifEqual",hash:{},fn:l.program(26,r,0),inverse:l.noop,data:r}))?i:"")+"						<div class='carousel-caption'>\n							<p>"+l.escapeExpression((t=null!=(t=a.caption||(null!=n?n.caption:n))?t:o,"function"==typeof t?t.call(s,{name:"caption",hash:{},data:r}):t))+"</p>\n						</div>\n\n					</div>\n"},20:function(l,n,a,e,r){return"					<div class='item active'>\n"},22:function(l,n,a,e,r){return"					<div class='item'>\n"},24:function(l,n,a,e,r){var i;return"						<img src='"+l.escapeExpression((i=null!=(i=a.path||(null!=n?n.path:n))?i:a.helperMissing,"function"==typeof i?i.call(null!=n?n:{},{name:"path",hash:{},data:r}):i))+"' class='center-block img-responsive'>\n"},26:function(l,n,a,e,r){var i;return"						<div class='responsive-iframe'>\n							<iframe src=\""+l.escapeExpression((i=null!=(i=a.path||(null!=n?n.path:n))?i:a.helperMissing,"function"==typeof i?i.call(null!=n?n:{},{name:"path",hash:{},data:r}):i))+'" frameborder="0" allowfullscreen></iframe>\n						</div>\n'},28:function(l,n,a,e,r){return'				<a class="left carousel-control" href="#carousel-project-detail" role="button" data-slide="prev"><span class=\'carousel-arrow prev\'>&lsaquo;</span></a>\n			  	<a class="right carousel-control" href="#carousel-project-detail" role="button" data-slide="next"><span class=\'carousel-arrow next\'>&rsaquo;</span></a>\n'},compiler:[7,">= 4.0.0"],main:function(l,n,a,e,r){var i,t=null!=n?n:{};return"<div class='row' id='project-detail'>\n	<a href='#' class='project-detail-close'><span class='close'>&times;</span></a>\n	<div class='col-md-5 project-detail-container'>\n"+(null!=(i=a["if"].call(t,null!=(i=null!=n?n.project:n)?i.title:i,{name:"if",hash:{},fn:l.program(1,r,0),inverse:l.noop,data:r}))?i:"")+(null!=(i=a["if"].call(t,null!=(i=null!=n?n.project:n)?i.description:i,{name:"if",hash:{},fn:l.program(3,r,0),inverse:l.noop,data:r}))?i:"")+(null!=(i=a["if"].call(t,null!=(i=null!=n?n.project:n)?i.link:i,{name:"if",hash:{},fn:l.program(5,r,0),inverse:l.noop,data:r}))?i:"")+(null!=(i=a["if"].call(t,null!=(i=null!=n?n.project:n)?i.builtWith:i,{name:"if",hash:{},fn:l.program(10,r,0),inverse:l.noop,data:r}))?i:"")+(null!=(i=a["if"].call(t,null!=(i=null!=n?n.project:n)?i.role:i,{name:"if",hash:{},fn:l.program(13,r,0),inverse:l.noop,data:r}))?i:"")+(null!=(i=a["if"].call(t,null!=(i=null!=n?n.project:n)?i.press:i,{name:"if",hash:{},fn:l.program(15,r,0),inverse:l.noop,data:r}))?i:"")+"	</div><!-- end of col-md-5 -->\n	<div class='col-md-7'>\n"+(null!=(i=a["if"].call(t,null!=(i=null!=n?n.project:n)?i.media:i,{name:"if",hash:{},fn:l.program(18,r,0),inverse:l.noop,data:r}))?i:"")+"	</div><!-- end of col-md-7 -->\n</div> <!-- end of id project detail -->"},useData:!0}),n.projectList=l({1:function(l,n,a,e,r){var i,t=null!=n?n:{},s=a.helperMissing,o="function",c=l.escapeExpression;return"	<div class='col-xs-12 col-sm-6 col-md-4'>\n		<a href='#' class='project-item-link is-loading' data-id='"+c((i=null!=(i=a.slug||(null!=n?n.slug:n))?i:s,typeof i===o?i.call(t,{name:"slug",hash:{},data:r}):i))+"'><img src='"+c((i=null!=(i=a.thumbnail||(null!=n?n.thumbnail:n))?i:s,typeof i===o?i.call(t,{name:"thumbnail",hash:{},data:r}):i))+"' class='center-block project-item-image'></a>\n		<h3 class='project-item-title'><div class='ellipsis'>"+c((i=null!=(i=a.title||(null!=n?n.title:n))?i:s,typeof i===o?i.call(t,{name:"title",hash:{},data:r}):i))+"</div></h3>\n	</div>\n"},compiler:[7,">= 4.0.0"],main:function(l,n,a,e,r){var i;return null!=(i=a.each.call(null!=n?n:{},null!=n?n.projects:n,{name:"each",hash:{},fn:l.program(1,r,0),inverse:l.noop,data:r}))?i:""},useData:!0})}();