/*
  Generated by kissy-tpl2mod.
*/
KISSY.add('date/picker/decade-panel/decade-panel-tpl',
'<div class="{{getBaseCssClasses \'header\'}}">\n    <a id="ks-date-picker-decade-panel-previous-century-btn-{{id}}"\n       class="{{getBaseCssClasses \'prev-century-btn\'}}"\n       href="#"\n       role="button"\n       title="{{previousCenturyLabel}}"\n       hidefocus="on">\n    </a>\n    <div class="{{getBaseCssClasses \'century\'}}"\n         id="ks-date-picker-decade-panel-century-{{id}}">\n                {{startYear}}-{{endYear}}\n    </div>\n    <a id="ks-date-picker-decade-panel-next-century-btn-{{id}}"\n       class="{{getBaseCssClasses \'next-century-btn\'}}"\n       href="#"\n       role="button"\n       title="{{nextCenturyLabel}}"\n       hidefocus="on">\n    </a>\n</div>\n<div class="{{getBaseCssClasses \'body\'}}">\n    <table class="{{getBaseCssClasses \'table\'}}" cellspacing="0" role="grid">\n        <tbody id="ks-date-picker-decade-panel-tbody-{{id}}">\n        {{{include "date/picker/decade-panel/decades-tpl"}}}\n        </tbody>\n    </table>\n</div>');